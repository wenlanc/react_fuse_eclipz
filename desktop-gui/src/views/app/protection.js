/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Button,
  TabContent,
  TabPane,
} from 'reactstrap';
import Switch from 'react-switch';
import { useTable, usePagination, useSortBy, useExpanded } from 'react-table';
import classnames from 'classnames';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { NotificationManager } from '../../components/common/react-notifications';
import DatatablePagination from '../../components/DatatablePagination';

function Table({ columns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, expanded },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6, expanded: false },
    },
    useSortBy,
    useExpanded,
    usePagination
  );
  return (
    <>
      <table {...getTableProps()} className="r-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={`td_${cellIndex}`}
                      {...cell.getCellProps({
                        className: cell.column.cellClass,
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr>{renderRowSubComponent({ row })}</tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const ProtectionPage = ({ match }) => {
  const [peerData, setPeerData] = useState([]);
  const [appsData, setAppsData] = useState([]);
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [activeTab, setActiveTab] = useState('apps');
  useEffect(() => {
    axios.get('http://localhost:8088/api/peers').then((response) => {
      if (response && response.data) {
        setPeerData(response.data);
        if (response.data.length > 0) {
          setSelectedPeer(0);
        }
      }
    });
    axios.get('http://localhost:8088/api/status').then((response) => {
      if (response && response.data && response.data.apps) {
        setAppsData(response.data.apps);
      }
    });
  }, []);
  const handleClickConnect = (row) => {
    axios
      .get('http://localhost:8088/api/peerconnect', {
        name: row.original.name,
      })
      .then((res) => {
        if (res) {
          axios.get('http://localhost:8088/api/peers').then((response) => {
            if (response && response.data) {
              setPeerData(response.data);
            }
          });
          NotificationManager.success(
            'Success.',
            'Connected successfully',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };
  const handleClickDisconnect = (row) => {
    axios
      .get('http://localhost:8088/api/peerdisconnect', {
        name: row.original.name,
      })
      .then((res) => {
        if (res) {
          axios.get('http://localhost:8088/api/peers').then((response) => {
            if (response && response.data) {
              setPeerData(response.data);
            }
          });
          NotificationManager.success(
            'Success.',
            'Disconnected successfully',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };
  const handleStatusChange = (row, checked) => {
    console.log(row);
    console.log(checked);
    if (checked) {
      handleClickConnect(row);
    } else {
      handleClickDisconnect(row);
    }
  };
  const appsCols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'text-muted w-25',
        Cell: (props) => <span style={{ color: '#05c44c' }}>Active</span>,
        sortType: 'basic',
      },
      {
        // Build our expander column
        expander: true,
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          {
            // return row.canExpand ? (
            //   <span
            //     {...row.getToggleRowExpandedProps({
            //       style: {
            //         // We can even use the row.depth property
            //         // and paddingLeft to indicate the depth
            //         // of the row
            //         paddingLeft: `${row.depth * 2}rem`,
            //       },
            //     })}
            //   >
            //     {row.isExpanded ? '👇' : '👉'}
            //   </span>
            // ) : null;
            return (
              <span
                {...row.getToggleRowExpandedProps({
                  style: {
                    // We can even use the row.depth property
                    // and paddingLeft to indicate the depth
                    // of the row
                    paddingLeft: `${row.depth * 2}rem`,
                  },
                })}
              >
                {row.isExpanded ? '👇' : '👉'}
              </span>
            );
          },
      },
      // {
      //   Header: 'Gateway',
      //   accessor: 'service',
      //   cellClass: 'text-muted w-25',
      //   Cell: (props) => <>{props.value}</>,
      //   sortType: 'basic',
      // },
      // {
      //   Header: 'Allowed IPs',
      //   accessor: 'allowedips',
      //   cellClass: 'text-muted w-50',
      //   Cell: (props) => <>{props.value}</>,
      //   sortType: 'basic',
      // },
    ],
    []
  );
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <td
        colSpan={3}
        style={{
          paddingLeft: '4rem',
          paddingTop: '0.5rem',
        }}
      >
        {row.original.service} - {row.original.allowed_ips}
      </td>
    ),
    []
  );
  const uncheckedIcon = (
    <svg
      viewBox="-2 -5 14 20"
      height="100%"
      width="100%"
      style={{ position: 'absolute', top: 0 }}
    >
      <path
        d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
  const checkedIcon = (
    <svg
      height="100%"
      width="100%"
      viewBox="-2 -5 17 21"
      style={{ position: 'absolute', top: 0 }}
    >
      <path
        d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
        fill="#144339"
        fillRule="evenodd"
      />
    </svg>
  );
  const peerCols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      //   cellClass: 'text-muted w-25',
      //   Cell: (props) => <span style={{ color: '#05c44c' }}>Active</span>,
      //   sortType: 'basic',
      // },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'text-muted w-25',
        Cell: ({ row }) => {
          return (
            <Switch
              onChange={(checked) => {
                handleStatusChange(row, checked);
              }}
              checked={row.status ? row.status : false}
              offColor="#6b2747"
              onColor="#156745"
              offHandleColor="#dd2350"
              onHandleColor="#05c44c"
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={uncheckedIcon}
              checkedHandleIcon={checkedIcon}
            />
          );
        },
        sortType: 'basic',
      },
      {
        // Build our expander column
        expander: true,
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) => {
          return (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          );
        },
      },
    ],
    []
  );
  const renderPeerRowSubComponent = React.useCallback(
    ({ row }) => (
      <td
        colSpan={3}
        style={{
          paddingLeft: '4rem',
          paddingTop: '0.5rem',
        }}
      >
        {row.original.endpoint} - {row.original.allowed_ips}
      </td>
    ),
    []
  );
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.peers" match={match} /> */}
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <Nav tabs className="separator-tabs ml-0 mb-2">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'apps',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('apps')}
                    to="#"
                    location={{}}
                  >
                    Apps
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'gateways',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('gateways')}
                    to="#"
                    location={{}}
                  >
                    Gateways
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'logs',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('logs')}
                    to="#"
                    location={{}}
                  >
                    Logs
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="apps">
                  <Table
                    columns={appsCols}
                    data={appsData}
                    renderRowSubComponent={renderRowSubComponent}
                  />
                </TabPane>
                <TabPane tabId="gateways">
                  <Table
                    columns={peerCols}
                    data={peerData}
                    renderRowSubComponent={renderPeerRowSubComponent}
                  />
                </TabPane>
                <TabPane tabId="logs">No Log</TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default ProtectionPage;
