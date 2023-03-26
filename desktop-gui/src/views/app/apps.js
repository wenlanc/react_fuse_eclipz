/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import axios from 'axios';
import DatatablePagination from '../../components/DatatablePagination';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useSortBy,
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
const AppsPage = ({ match }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8088/api/status').then((response) => {
      if (response && response.data) {
        setData(response.data);
      }
    });
  }, []);
  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Gateway',
        accessor: 'service',
        cellClass: 'text-muted w-25',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Allowed IPs',
        accessor: 'allowedips',
        cellClass: 'text-muted w-50',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
    ],
    []
  );
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.apps" match={match} /> */}
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <Table columns={cols} data={data && data.apps ? data.apps : []} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default AppsPage;
