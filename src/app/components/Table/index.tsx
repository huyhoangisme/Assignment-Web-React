import React from 'react';
import { Column, usePagination, useRowSelect, useTable } from 'react-table';
import IndeterminateCheckbox from './components/IndeterminateCheckbox';
import PageSize from './PageSize';
import Paginator from './Paginator';

interface TableProps<T extends object> {
  columns: Array<Column<T>>;
  data: Array<T>;
  queryPageSize?: number;
  queryPageIndex?: number;
  totalItems?: number;
  nextPageFunc?: () => void;
  previousPageFunc?: () => void;
  goToPageFunc?: (pageNumber: number) => void;
  changePageSize?: (size: number) => void;
  hasPaginator?: boolean;
  hasSelector?: boolean;
  headerBackgroundColor?: string;
}

function Table<T extends object>({
  columns,
  data,
  queryPageIndex,
  queryPageSize,
  totalItems,
  nextPageFunc,
  previousPageFunc,
  goToPageFunc,
  changePageSize,
  hasPaginator = false,
  hasSelector = false,
  headerBackgroundColor,
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: data,
      initialState: { pageIndex: queryPageIndex, pageSize: queryPageSize },
      manualPagination: true,
      pageCount: (totalItems && queryPageSize && Math.ceil(totalItems / queryPageSize)) || 0,
    },
    usePagination,
    useRowSelect,
    hooks => {
      hasSelector &&
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <div className="w-min pt-[7px]">
                <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div className="w-min pt-[7px]">
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
    },
  );

  function goToNextPage() {
    if (canNextPage) {
      nextPageFunc && nextPageFunc();
      nextPage();
    }
  }

  function goToPreviousPage() {
    if (canPreviousPage) {
      previousPageFunc && previousPageFunc();
      previousPage();
    }
  }

  function goToSpecificPage(pageNumber: number) {
    goToPageFunc && goToPageFunc(pageNumber);
    gotoPage(pageNumber);
  }

  function changeSize(size: number) {
    goToSpecificPage(0);
    changePageSize && changePageSize(size);
    setPageSize(size);
  }

  return (
    <div>
      {hasSelector && (
        <div className={`m-4 text-[16px] uppercase ${selectedFlatRows.length === 0 && 'invisible'}`}>
          {selectedFlatRows.length} items selected
        </div>
      )}
      <table {...getTableProps()} className="w-full border-[0.5px] border-[#e9edf5]">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className={`${
                    hasSelector ? 'py-[12px]' : 'py-[17px]'
                  } first:rounded-l-lg pl-5 pr-5 last:rounded-r-lg text-start uppercase border-b border-[#e9edf5]`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b-[0.5px] last:border-b-0">
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="py-[16px] flex-1 pl-5 pr-5">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {hasPaginator && (
        <div className="flex justify-between items-center mt-[28px] mb-5">
          <span>
            {(pageIndex + 1) * pageSize} of {totalItems} items
          </span>
          <Paginator
            pageIndex={pageIndex}
            pageCount={pageCount}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            nextPage={goToNextPage}
            previousPage={goToPreviousPage}
            gotoPage={goToSpecificPage}
          />
          <PageSize pageSize={pageSize} setPageSize={changeSize} />
        </div>
      )}
    </div>
  );
}

export default Table;
