type AnvilDetailHostSummary = {
  host_name: string;
  host_uuid: string;
  maintenance_mode: boolean;
  state: string;
  state_message: string;
  state_percent: number;
};

type AnvilDetailParamsDictionary = {
  anvilUuid: string;
};

type AnvilDetailResponseBody = {
  anvil_state: string;
  hosts: AnvilDetailHostSummary[];
};

type AnvilDetailForProvisionServer = {
  anvilUUID: string;
  anvilName: string;
  anvilDescription: string;
  hosts: Array<{
    hostUUID: string;
    hostName: string;
    hostCPUCores: number;
    hostMemory: string;
  }>;
  anvilTotalCPUCores: number;
  anvilTotalMemory: string;
  servers: Array<{
    serverUUID: string;
    serverName: string;
    serverCPUCores: number;
    serverMemory: string;
  }>;
  anvilTotalAllocatedCPUCores: number;
  anvilTotalAllocatedMemory: string;
  anvilTotalAvailableCPUCores: number;
  anvilTotalAvailableMemory: string;
  storageGroups: Array<{
    storageGroupUUID: string;
    storageGroupName: string;
    storageGroupSize: string;
    storageGroupFree: string;
  }>;
  files: Array<{
    fileUUID: string;
    fileName: string;
  }>;
};

type AnvilOverview = {
  anvilName: string;
  anvilUUID: string;
  hosts: Array<{
    hostName: string;
    hostUUID: string;
  }>;
};
