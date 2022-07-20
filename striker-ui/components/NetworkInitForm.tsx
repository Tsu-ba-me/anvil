import { FC, useEffect, useState } from 'react';
import {
  Box as MUIBox,
  BoxProps as MUIBoxProps,
  iconButtonClasses as muiIconButtonClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Add as MUIAddIcon,
  Check as MUICheckIcon,
  DragHandle as MUIDragHandleIcon,
} from '@mui/icons-material';
import {
  DataGrid as MUIDataGrid,
  DataGridProps as MUIDataGridProps,
  gridClasses as muiGridClasses,
} from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

import API_BASE_URL from '../lib/consts/API_BASE_URL';
import { BLUE, GREY } from '../lib/consts/DEFAULT_THEME';

import BriefNetworkInterface from './BriefNetworkInterface';
import Decorator from './Decorator';
import DropArea from './DropArea';
import OutlinedInputWithLabel from './OutlinedInputWithLabel';
import { InnerPanel, InnerPanelHeader } from './Panels';
import periodicFetch from '../lib/fetchers/periodicFetch';
import SelectWithLabel from './SelectWithLabel';
import Spinner from './Spinner';
import sumstring from '../lib/sumstring';
import { BodyText, DataGridCellText } from './Text';
import IconButton from './IconButton';

export type NetworkInterfaceInputMap = Record<
  string,
  {
    isApplied?: boolean;
  }
>;

export type NetworkInput = {
  inputUUID: string;
  interfaces: NetworkInterfaceOverviewMetadata[];
  ipAddress: string;
  name: string;
  subnetMask: string;
  type: string;
};

const MOCK_NICS: NetworkInterfaceOverviewMetadata[] = [
  {
    networkInterfaceUUID: 'fe299134-c8fe-47bd-ab7a-3aa95eada1f6',
    networkInterfaceMACAddress: '52:54:00:d2:31:36',
    networkInterfaceName: 'ens10',
    networkInterfaceState: 'up',
    networkInterfaceSpeed: 10000,
    networkInterfaceOrder: 1,
  },
  {
    networkInterfaceUUID: 'a652bfd5-61ac-4495-9881-185be8a2ac74',
    networkInterfaceMACAddress: '52:54:00:d4:4d:b5',
    networkInterfaceName: 'ens11',
    networkInterfaceState: 'up',
    networkInterfaceSpeed: 10000,
    networkInterfaceOrder: 2,
  },
  {
    networkInterfaceUUID: 'b8089b40-0969-49c3-ad65-2470ddb420ef',
    networkInterfaceMACAddress: '52:54:00:ba:f5:a3',
    networkInterfaceName: 'ens3',
    networkInterfaceState: 'up',
    networkInterfaceSpeed: 10000,
    networkInterfaceOrder: 3,
  },
  {
    networkInterfaceUUID: '42a17465-31b1-4e47-9a91-f803f22ffcc1',
    networkInterfaceMACAddress: '52:54:00:ae:31:70',
    networkInterfaceName: 'ens9',
    networkInterfaceState: 'up',
    networkInterfaceSpeed: 10000,
    networkInterfaceOrder: 4,
  },
];

const NETWORK_TYPES: Record<string, string> = {
  bcn: 'Back-Channel Network',
  ifn: 'Internet-Facing Network',
};

const REQUIRED_NETWORKS = [
  {
    inputUUID: '30dd2ac5-8024-4a7e-83a1-6a3df7218972',
    interfaces: [],
    ipAddress: '10.200.1.1',
    name: `${NETWORK_TYPES.bcn} 01`,
    subnetMask: '255.255.0.0',
    type: 'bcn',
  },
  {
    inputUUID: 'e7ef3af5-5602-440c-87f8-69c242e3d7f3',
    interfaces: [],
    ipAddress: '10.201.1.1',
    name: `${NETWORK_TYPES.ifn} 01`,
    subnetMask: '255.255.0.0',
    type: 'ifn',
  },
];

const MAX_INTERFACES_PER_NETWORK = 2;
const NETWORK_INTERFACE_TEMPLATE = Array.from(
  { length: MAX_INTERFACES_PER_NETWORK },
  (unused, index) => index + 1,
);

const createNetworkInterfaceTableColumns = (
  handleDragMouseDown: (
    row: NetworkInterfaceOverviewMetadata,
    ...eventArgs: Parameters<Exclude<MUIBoxProps['onMouseDown'], undefined>>
  ) => void,
  networkInterfaceInputMap: NetworkInterfaceInputMap,
): MUIDataGridProps['columns'] => [
  {
    align: 'center',
    field: '',
    renderCell: ({ row }) => {
      const { isApplied } =
        networkInterfaceInputMap[row.networkInterfaceUUID] || false;

      let cursor = 'grab';
      let handleMouseDown: MUIBoxProps['onMouseDown'] = (...eventArgs) => {
        handleDragMouseDown(row, ...eventArgs);
      };
      let icon = <MUIDragHandleIcon />;

      if (isApplied) {
        cursor = 'auto';
        handleMouseDown = undefined;
        icon = <MUICheckIcon sx={{ color: BLUE }} />;
      }

      return (
        <MUIBox
          onMouseDown={handleMouseDown}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',

            '&:hover': { cursor },
          }}
        >
          {icon}
        </MUIBox>
      );
    },
    sortable: false,
    width: 1,
  },
  {
    field: 'networkInterfaceName',
    flex: 1,
    headerName: 'Name',
    renderCell: ({ row: { networkInterfaceState } = {}, value }) => (
      <MUIBox
        sx={{
          display: 'flex',
          flexDirection: 'row',
          '& > :not(:first-child)': { marginLeft: '.5em' },
        }}
      >
        <Decorator
          colour={networkInterfaceState === 'up' ? 'ok' : 'off'}
          sx={{ height: 'auto' }}
        />
        <DataGridCellText text={value} />
      </MUIBox>
    ),
    sortComparator: (v1, v2) => sumstring(v1) - sumstring(v2),
  },
  {
    field: 'networkInterfaceMACAddress',
    flex: 1,
    headerName: 'MAC',
    renderCell: ({ value }) => <DataGridCellText monospaced text={value} />,
  },
  {
    field: 'networkInterfaceState',
    flex: 1,
    headerName: 'State',
    renderCell: ({ value }) => {
      const state = String(value);

      return (
        <DataGridCellText
          text={`${state.charAt(0).toUpperCase()}${state.substring(1)}`}
        />
      );
    },
  },
  {
    field: 'networkInterfaceSpeed',
    flex: 1,
    headerName: 'Speed',
    renderCell: ({ value }) => (
      <DataGridCellText text={`${parseFloat(value).toLocaleString()} Mbps`} />
    ),
  },
  {
    field: 'networkInterfaceOrder',
    flex: 1,
    headerName: 'Order',
  },
];

const NetworkInitForm: FC = () => {
  const theme = useTheme();
  const bplg = useMediaQuery(theme.breakpoints.up('lg'));

  const [dragMousePosition, setDragMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [networkInterfaceInputMap, setNetworkInterfaceInputMap] =
    useState<NetworkInterfaceInputMap>({});
  const [networkInputs, setNetworkInputs] =
    useState<NetworkInput[]>(REQUIRED_NETWORKS);
  const [networkInterfaceHeld, setNetworkInterfaceHeld] = useState<
    NetworkInterfaceOverviewMetadata | undefined
  >();

  const optionalNetworkInputsLength = networkInputs.length - 2;

  const { data: networkInterfaces = MOCK_NICS, isLoading } = periodicFetch<
    NetworkInterfaceOverviewMetadata[]
  >(`${API_BASE_URL}/network-interface`, {
    refreshInterval: 2000,
    onSuccess: (data) => {
      if (data instanceof Array) {
        const map = data.reduce<NetworkInterfaceInputMap>(
          (reduceContainer, { networkInterfaceUUID }) => {
            reduceContainer[networkInterfaceUUID] =
              networkInterfaceInputMap[networkInterfaceUUID] || {};

            return reduceContainer;
          },
          {},
        );

        setNetworkInterfaceInputMap(map);
      }
    },
  });

  const clearNetworkInterfaceHeld = () => {
    setNetworkInterfaceHeld(undefined);
  };

  const createNetwork = () => {
    networkInputs.unshift({
      inputUUID: uuidv4(),
      interfaces: [],
      ipAddress: '',
      name: '',
      subnetMask: '',
      type: '',
    });

    setNetworkInputs([...networkInputs]);
  };

  const getNetworkTypeCount = (targetType: string, lastIndex = 0) => {
    let count = 0;

    for (let index = networkInputs.length - 1; index >= lastIndex; index -= 1) {
      if (networkInputs[index].type === targetType) {
        count += 1;
      }
    }

    return count;
  };

  let createDropMouseUpHandler: (
    interfaces: NetworkInterfaceOverviewMetadata[],
  ) => MUIBoxProps['onMouseUp'];
  let floatingNetworkInterface: JSX.Element = <></>;
  let handleDragAreaMouseLeave: MUIBoxProps['onMouseLeave'];
  let handleDragAreaMouseMove: MUIBoxProps['onMouseMove'];
  let handleDragAreaMouseUp: MUIBoxProps['onMouseUp'];

  if (networkInterfaceHeld) {
    const { networkInterfaceUUID } = networkInterfaceHeld;

    createDropMouseUpHandler =
      (interfaces: NetworkInterfaceOverviewMetadata[]) => () => {
        if (interfaces.length < MAX_INTERFACES_PER_NETWORK) {
          interfaces.push(networkInterfaceHeld);

          networkInterfaceInputMap[networkInterfaceUUID].isApplied = true;
        }
      };

    floatingNetworkInterface = (
      <BriefNetworkInterface
        networkInterface={networkInterfaceHeld}
        sx={{
          left: `calc(${dragMousePosition.x}px + .4em)`,
          position: 'absolute',
          top: `calc(${dragMousePosition.y}px - 1em)`,
          zIndex: 10,
        }}
      />
    );

    handleDragAreaMouseLeave = () => {
      clearNetworkInterfaceHeld();
    };

    handleDragAreaMouseMove = ({
      currentTarget,
      nativeEvent: { clientX, clientY },
    }) => {
      const { left, top } = currentTarget.getBoundingClientRect();

      setDragMousePosition({
        x: clientX - left,
        y: clientY - top,
      });
    };

    handleDragAreaMouseUp = () => {
      clearNetworkInterfaceHeld();
    };
  }

  useEffect(() => {
    const map = networkInterfaces.reduce<NetworkInterfaceInputMap>(
      (reduceContainer, { networkInterfaceUUID }) => {
        reduceContainer[networkInterfaceUUID] =
          networkInterfaceInputMap[networkInterfaceUUID] || {};

        return reduceContainer;
      },
      {},
    );

    setNetworkInterfaceInputMap(map);

    // This block inits the input map for the MOCK_NICS.
    // TODO: remove after testing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <MUIBox
      onMouseDown={({ clientX, clientY, currentTarget }) => {
        const { left, top } = currentTarget.getBoundingClientRect();

        setDragMousePosition({
          x: clientX - left,
          y: clientY - top,
        });
      }}
      onMouseLeave={handleDragAreaMouseLeave}
      onMouseMove={handleDragAreaMouseMove}
      onMouseUp={handleDragAreaMouseUp}
      sx={{ position: 'relative' }}
    >
      {floatingNetworkInterface}
      <MUIBox
        sx={{
          display: 'flex',
          flexDirection: 'column',

          '& > :not(:first-child, :last-child)': {
            marginTop: '1em',
          },
        }}
      >
        <MUIDataGrid
          autoHeight
          columns={createNetworkInterfaceTableColumns((row) => {
            setNetworkInterfaceHeld(row);
          }, networkInterfaceInputMap)}
          disableColumnMenu
          disableSelectionOnClick
          getRowId={({ networkInterfaceUUID }) => networkInterfaceUUID}
          hideFooter
          rows={networkInterfaces}
          sx={{
            color: GREY,

            [`& .${muiIconButtonClasses.root}`]: {
              color: 'inherit',
            },

            [`& .${muiGridClasses.cell}:focus`]: {
              outline: 'none',
            },
          }}
        />
        <MUIBox
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={createNetwork}>
            <MUIAddIcon />
          </IconButton>
        </MUIBox>
        <MUIBox
          sx={{
            alignItems: 'strech',
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            paddingLeft: '.3em',

            '& > *': {
              marginBottom: '1em',
              marginTop: '1em',
              minWidth: '10em',
              width: '25%',
            },

            '& > :not(:first-child)': {
              marginLeft: '1em',
            },
          }}
        >
          {networkInputs.map((networkInput, networkIndex) => {
            const { inputUUID, interfaces, ipAddress, subnetMask, type } =
              networkInput;
            const isNetworkOptional =
              networkIndex < optionalNetworkInputsLength;

            return (
              <InnerPanel key={`network-${inputUUID}`}>
                <InnerPanelHeader>
                  <SelectWithLabel
                    id={`network-${inputUUID}-name`}
                    isReadOnly={!isNetworkOptional}
                    label="Network name"
                    selectItems={Object.entries(NETWORK_TYPES).map(
                      ([networkType, networkTypeName]) => {
                        let count = getNetworkTypeCount(
                          networkType,
                          networkIndex,
                        );

                        if (networkType !== type) {
                          count += 1;
                        }

                        const displayValue = `${networkTypeName} ${count}`;

                        return { value: networkType, displayValue };
                      },
                    )}
                    selectProps={{
                      onChange: ({ target: { value } }) => {
                        networkInput.type = String(value);

                        setNetworkInputs([...networkInputs]);
                      },
                      renderValue: bplg
                        ? undefined
                        : (value) =>
                            `${String(
                              value,
                            ).toUpperCase()} ${getNetworkTypeCount(
                              type,
                              networkIndex,
                            )}`,
                      value: type,
                    }}
                  />
                </InnerPanelHeader>
                <MUIBox
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '.6em',

                    '& > :not(:first-child)': {
                      marginTop: '1em',
                    },
                  }}
                >
                  {NETWORK_INTERFACE_TEMPLATE.map((linkNumber) => {
                    const linkName = `Link ${linkNumber}`;
                    const networkInterfaceIndex = linkNumber - 1;
                    const networkInterface = interfaces[networkInterfaceIndex];
                    const { networkInterfaceUUID } = networkInterface || {};

                    return (
                      <MUIBox
                        key={`network-${inputUUID}-link-${linkNumber}`}
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'row',

                          '& > :not(:first-child)': {
                            marginLeft: '1em',
                          },

                          '& > :last-child': {
                            flexGrow: 1,
                          },
                        }}
                      >
                        <BodyText text={linkName} />
                        <DropArea
                          onMouseUp={createDropMouseUpHandler?.call(
                            null,
                            interfaces,
                          )}
                        >
                          {networkInterface ? (
                            <BriefNetworkInterface
                              key={`network-interface-${networkInterfaceUUID}`}
                              networkInterface={networkInterface}
                              onClose={() => {
                                interfaces.splice(networkInterfaceIndex, 1);

                                networkInterfaceInputMap[
                                  networkInterfaceUUID
                                ].isApplied = false;

                                if (
                                  isNetworkOptional &&
                                  interfaces.length === 0
                                ) {
                                  networkInputs.splice(networkIndex, 1);
                                }

                                setNetworkInterfaceInputMap({
                                  ...networkInterfaceInputMap,
                                });
                              }}
                            />
                          ) : (
                            <BodyText text="Drop to add interface." />
                          )}
                        </DropArea>
                      </MUIBox>
                    );
                  })}
                  <OutlinedInputWithLabel
                    label="IP address"
                    onChange={({ target: { value } }) => {
                      networkInput.ipAddress = String(value);

                      setNetworkInputs([...networkInputs]);
                    }}
                    value={ipAddress}
                  />
                  <OutlinedInputWithLabel
                    label="Subnet mask"
                    onChange={({ target: { value } }) => {
                      networkInput.subnetMask = String(value);

                      setNetworkInputs([...networkInputs]);
                    }}
                    value={subnetMask}
                  />
                </MUIBox>
              </InnerPanel>
            );
          })}
        </MUIBox>
      </MUIBox>
    </MUIBox>
  );
};

export default NetworkInitForm;
