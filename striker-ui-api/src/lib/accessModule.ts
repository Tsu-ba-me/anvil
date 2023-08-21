import { ChildProcess, spawn, SpawnOptions } from 'child_process';
import EventEmitter from 'events';
import { readFileSync } from 'fs';

import { SERVER_PATHS, PGID, PUID, DEFAULT_JOB_PROGRESS } from './consts';

import { formatSql } from './formatSql';
import {
  date,
  stderr as sherr,
  stdout as shout,
  stdoutVar as shvar,
  uuid,
} from './shell';

class Access extends EventEmitter {
  private ps: ChildProcess;

  constructor({
    eventEmitterOptions = {},
    spawnOptions = {},
  }: {
    eventEmitterOptions?: ConstructorParameters<typeof EventEmitter>[0];
    spawnOptions?: SpawnOptions;
  } = {}) {
    super(eventEmitterOptions);

    this.ps = this.start(spawnOptions);
  }

  private start({
    args = [],
    gid = PGID,
    stdio = 'pipe',
    timeout = 10000,
    uid = PUID,
    ...restSpawnOptions
  }: AccessStartOptions = {}) {
    shvar(
      { gid, stdio, timeout, uid, ...restSpawnOptions },
      `Starting anvil-access-module daemon with options: `,
    );

    const ps = spawn(SERVER_PATHS.usr.sbin['anvil-access-module'].self, args, {
      gid,
      stdio,
      timeout,
      uid,
      ...restSpawnOptions,
    });

    let stdout = '';

    ps.stderr?.setEncoding('utf-8').on('data', (chunk: string) => {
      sherr(`anvil-access-module daemon stderr: ${chunk}`);
    });

    ps.stdout?.setEncoding('utf-8').on('data', (chunk: string) => {
      stdout += chunk;

      let nindex: number = stdout.indexOf('\n');

      // 1. ~a is the shorthand for -(a + 1)
      // 2. negatives are evaluated to true
      while (~nindex) {
        const scriptId = stdout.substring(0, 36);
        const output = stdout.substring(36, nindex);

        if (scriptId) this.emit(scriptId, output);

        stdout = stdout.substring(nindex + 1);
        nindex = stdout.indexOf('\n');
      }
    });

    return ps;
  }

  private stop() {
    this.ps.once('error', () => !this.ps.killed && this.ps.kill('SIGKILL'));

    this.ps.kill();
  }

  private restart(options?: AccessStartOptions) {
    this.ps.once('close', () => this.start(options));

    this.stop();
  }

  public interact<T>(operation: string, ...args: string[]) {
    const { stdin } = this.ps;

    const scriptId = uuid();
    const command = `${operation} ${args.join(' ')}`;
    const script = `${scriptId} ${command}\n`;

    const promise = new Promise<T>((resolve, reject) => {
      this.once(scriptId, (data) => {
        let result: T;

        try {
          result = JSON.parse(data);
        } catch (error) {
          return reject(`Failed to parse line ${scriptId}; got [${data}]`);
        }

        shvar({ result }, `Access interact ${scriptId} returns: `);

        return resolve(result);
      });
    });

    shvar({ script }, 'Access interact: ');

    stdin?.write(script);

    return promise;
  }
}

const access = new Access();
const rootAccess = new Access({ spawnOptions: { gid: 0, uid: 0 } });

const subroutine = async <T extends unknown[]>(
  subroutine: string,
  {
    params = [],
    pre = ['Database'],
    root,
  }: {
    params?: unknown[];
    pre?: string[];
    root?: boolean;
  } = {},
) => {
  const selectedAccess = root ? rootAccess : access;
  const chain = `${pre.join('->')}->${subroutine}`;

  const subParams: string[] = params.map<string>((p) => {
    let result: string;

    try {
      result = JSON.stringify(p);
    } catch (error) {
      result = String(p);
    }

    return `"${result.replaceAll('"', '\\"')}"`;
  });

  const { sub_results: results } = await selectedAccess.interact<{
    sub_results: T;
  }>('x', chain, ...subParams);

  return results;
};

const query = <T extends QueryResult>(script: string) =>
  access.interact<T>('r', formatSql(script));

const write = async (script: string) => {
  const { write_code: wcode } = await access.interact<{ write_code: number }>(
    'w',
    formatSql(script),
  );

  return wcode;
};

const insertOrUpdateJob = async ({
  job_progress = DEFAULT_JOB_PROGRESS,
  line = 0,
  ...rest
}: JobParams) => {
  const [uuid]: [string] = await subroutine('insert_or_update_jobs', {
    params: [{ job_progress, line, ...rest }],
  });

  return uuid;
};

const insertOrUpdateUser: InsertOrUpdateUserFunction = async (params) => {
  const [uuid]: [string] = await subroutine('insert_or_update_users', {
    params: [params],
  });

  return uuid;
};

const insertOrUpdateVariable: InsertOrUpdateVariableFunction = async (
  params,
) => {
  const [uuid]: [string] = await subroutine('insert_or_update_variables', {
    params: [params],
  });

  return uuid;
};

const anvilSyncShared = (
  jobName: string,
  jobData: string,
  jobTitle: string,
  jobDescription: string,
  { jobHostUUID }: JobAnvilSyncSharedOptions = { jobHostUUID: undefined },
) => {
  const subParams: JobParams = {
    file: __filename,
    job_command: SERVER_PATHS.usr.sbin['anvil-sync-shared'].self,
    job_data: jobData,
    job_name: `storage::${jobName}`,
    job_title: `job_${jobTitle}`,
    job_description: `job_${jobDescription}`,
  };

  if (jobHostUUID) {
    subParams.job_host_uuid = jobHostUUID;
  }

  return insertOrUpdateJob(subParams);
};

const refreshTimestamp = () => {
  let result: string;

  try {
    result = date('--rfc-3339', 'ns').trim();
  } catch (shError) {
    throw new Error(
      `Failed to get timestamp for database use; CAUSE: ${shError}`,
    );
  }

  return result;
};

const encrypt: EncryptFunction = async (params) => {
  const [result]: [Encrypted] = await subroutine('encrypt_password', {
    params: [params],
    pre: ['Account'],
  });

  return result;
};

const getData = async <T>(...keys: string[]) => {
  const chain = `data->${keys.join('->')}`;

  const {
    sub_results: [data],
  } = await access.interact<{ sub_results: [T] }>('x', chain);

  shvar(data, `${chain} data: `);

  return data;
};

const getAnvilData = async () => {
  await subroutine('get_anvils');

  return getData<AnvilDataAnvilListHash>('anvils');
};

const getFenceSpec = async () => {
  await subroutine('get_fence_data', { pre: ['Striker'] });

  return getData<AnvilDataFenceHash>('fence_data');
};

const getHostData = async () => {
  await subroutine('get_hosts');

  return getData<AnvilDataHostListHash>('hosts');
};

const getLocalHostName = () => {
  let result: string;

  try {
    result = readFileSync(SERVER_PATHS.etc.hostname.self, {
      encoding: 'utf-8',
    }).trim();
  } catch (subError) {
    throw new Error(`Failed to get local host name; CAUSE: ${subError}`);
  }

  shout(`localHostName=${result}`);

  return result;
};

const getLocalHostUuid = () => {
  let result: string;

  try {
    result = readFileSync(SERVER_PATHS.etc.anvil['host.uuid'].self, {
      encoding: 'utf-8',
    }).trim();
  } catch (subError) {
    throw new Error(`Failed to get local host UUID; CAUSE: ${subError}`);
  }

  shout(`localHostUUID=[${result}]`);

  return result;
};

const getManifestData = async (manifestUuid?: string) => {
  await subroutine('load_manifest', {
    params: [{ manifest_uuid: manifestUuid }],
    pre: ['Striker'],
  });

  return getData<AnvilDataManifestListHash>('manifests');
};

const getNetworkData = async (hostUuid: string, hostName?: string) => {
  let replacementKey = hostName;

  if (!replacementKey) {
    ({
      host_uuid: {
        [hostUuid]: { short_host_name: replacementKey },
      },
    } = await getHostData());
  }

  await subroutine('load_interfces', {
    params: [{ host: replacementKey, host_uuid: hostUuid }],
    pre: ['Network'],
  });

  return getData<AnvilDataNetworkListHash>('network');
};

const getPeerData: GetPeerDataFunction = async (
  target,
  { password, port } = {},
) => {
  const [
    rawIsConnected,
    {
      host_name: hostName,
      host_os: hostOS,
      host_uuid: hostUUID,
      internet: rawIsInetConnected,
      os_registered: rawIsOSRegistered,
    },
  ]: [connected: string, data: PeerDataHash] = await subroutine(
    'get_peer_data',
    {
      params: [{ password, port, target }],
      pre: ['Striker'],
    },
  );

  return {
    hostName,
    hostOS,
    hostUUID,
    isConnected: rawIsConnected === '1',
    isInetConnected: rawIsInetConnected === '1',
    isOSRegistered: rawIsOSRegistered === 'yes',
  };
};

const getUpsSpec = async () => {
  await subroutine('get_ups_data', { pre: ['Striker'] });

  return getData<AnvilDataUPSHash>('ups_data');
};

const getVncinfo = async (serverUuid: string): Promise<ServerDetailVncInfo> => {
  const rows: [[string]] = await query(
    `SELECT variable_value FROM variables WHERE variable_name = 'server::${serverUuid}::vncinfo';`,
  );

  if (!rows.length) {
    throw new Error('No record found');
  }

  const [[vncinfo]] = rows;
  const [domain, rPort] = vncinfo.split(':');

  const port = Number.parseInt(rPort);
  const protocol = 'ws';

  return { domain, port, protocol };
};

export {
  insertOrUpdateJob as job,
  insertOrUpdateUser,
  insertOrUpdateVariable as variable,
  anvilSyncShared,
  refreshTimestamp as timestamp,
  encrypt,
  getData,
  getAnvilData,
  getFenceSpec,
  getHostData,
  getLocalHostName,
  getLocalHostUuid as getLocalHostUUID,
  getManifestData,
  getNetworkData,
  getPeerData,
  getUpsSpec,
  getVncinfo,
  query,
  subroutine as sub,
  write,
};
