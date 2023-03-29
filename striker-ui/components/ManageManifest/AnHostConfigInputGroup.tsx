import { ReactElement, useMemo } from 'react';

import AnHostInputGroup from './AnHostInputGroup';
import Grid from '../Grid';

const INPUT_ID_PREFIX_AN_HOST_CONFIG = 'an-host-config-input';

const INPUT_GROUP_ID_PREFIX_AHC = `${INPUT_ID_PREFIX_AN_HOST_CONFIG}-group`;
const INPUT_GROUP_CELL_ID_PREFIX_AHC = `${INPUT_GROUP_ID_PREFIX_AHC}-cell`;

const DEFAULT_HOST_LIST: ManifestHostList = {
  node1: {
    hostName: '',
    hostNumber: 1,
    hostType: 'node',
  },
  node2: {
    hostName: '',
    hostNumber: 2,
    hostType: 'node',
  },
};

const AnHostConfigInputGroup = <M extends MapToInputTestID>({
  formUtils,
  knownFences = {},
  knownUpses = {},
  networkListEntries,
  previous: { hosts: previousHostList = DEFAULT_HOST_LIST } = {},
}: AnHostConfigInputGroupProps<M>): ReactElement => {
  const hostListEntries = useMemo(
    () => Object.entries(previousHostList),
    [previousHostList],
  );
  const knownFenceListValues = useMemo(
    () => Object.values(knownFences),
    [knownFences],
  );
  const knownUpsListValues = useMemo(
    () => Object.values(knownUpses),
    [knownUpses],
  );

  const hostListGridLayout = useMemo<GridLayout>(
    () =>
      hostListEntries.reduce<GridLayout>(
        (previous, [hostId, previousHostArgs]) => {
          const {
            fences: previousFenceList = {},
            hostNumber,
            hostType,
            networks: previousNetworkList = {},
            upses: previousUpsList = {},
          }: ManifestHost = previousHostArgs;

          const fences = knownFenceListValues.reduce<ManifestHostFenceList>(
            (fenceList, { fenceName }) => {
              const { fencePort = '' } = previousFenceList[fenceName] ?? {};

              fenceList[fenceName] = { fenceName, fencePort };

              return fenceList;
            },
            {},
          );
          const networks = networkListEntries.reduce<ManifestHostNetworkList>(
            (networkList, [networkId, { networkNumber, networkType }]) => {
              const { networkIp = '' } = previousNetworkList[networkId] ?? {};

              networkList[networkId] = {
                networkIp,
                networkNumber,
                networkType,
              };

              return networkList;
            },
            {},
          );
          const upses = knownUpsListValues.reduce<ManifestHostUpsList>(
            (upsList, { upsName }) => {
              const { isUsed = true } = previousUpsList[upsName] ?? {};

              upsList[upsName] = { isUsed, upsName };

              return upsList;
            },
            {},
          );

          const cellId = `${INPUT_GROUP_CELL_ID_PREFIX_AHC}-${hostId}`;
          const hostLabel = `${hostType} ${hostNumber}`;

          previous[cellId] = {
            children: (
              <AnHostInputGroup
                formUtils={formUtils}
                hostId={hostId}
                hostLabel={hostLabel}
                previous={{ fences, networks, upses }}
              />
            ),
            md: 3,
            sm: 2,
          };

          return previous;
        },
        {},
      ),
    [
      formUtils,
      hostListEntries,
      knownFenceListValues,
      knownUpsListValues,
      networkListEntries,
    ],
  );

  return (
    <Grid
      columns={{ xs: 1, sm: 2, md: 3 }}
      layout={hostListGridLayout}
      spacing="1em"
    />
  );
};

export default AnHostConfigInputGroup;
