import { FC } from "react"
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table"
import GlobalFilter from "../GlobalFilter"
import Pagination from "../Pagination"
import TableBody from "../TableBody"
import TableHeader from "../TableHeader"

interface TableProps {
  columns: Array<{
    Header: string
    accessor: string
  }>
  data: Array<{
    walletAddress: string
    tokenId: string
    twitterHandle: string
    reason: string
    status: "Review" | "Accepted" | "Rejected"
  }>
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
  )
  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? <div key={column.id}>{column.render("Filter")}</div> : null,
        ),
      )}
      <div className="flex flex-col mt-2">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" />
            <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
              <TableHeader headerGroups={headerGroups} />
              <TableBody
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow}
              />
            </table>
          </div>
        </div>
      </div>
      <Pagination
        state={state}
        setPageSize={setPageSize}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageCount={pageCount}
      />
    </>
  )
}

export default Table
