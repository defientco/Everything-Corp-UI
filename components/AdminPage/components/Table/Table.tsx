/* eslint-disable react/no-array-index-key */
import { FC, useMemo, useState } from "react"
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table"
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid"
import { useAsyncDebounce } from "../../../../hooks/useAsyncDebounce"
import { Button, PageButton } from "../../../../shared/Button"
import { classNames } from "../../../../shared/Utils"
import { SortDownIcon, SortIcon, SortUpIcon } from "../../../../shared/Icons"

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
export const StatusPill = ({ value }) => {
  const status = value ? value.toLowerCase() : "unknown"

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("accepted") ? "bg-green-100 text-green-700" : null,
        status.startsWith("review") ? "bg-yellow-100 text-yellow-700" : null,
        status.startsWith("rejected") ? "bg-red-100 text-red-700" : null,
      )}
    >
      {status}
    </span>
  )
}
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: any = useMemo(() => {
    const newOptions = new Set()
    preFilteredRows.forEach((row) => {
      newOptions.add(row.values[id])
    })
    return [...Array.from(newOptions.values())]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((v: string) => {
    setGlobalFilter(v || undefined)
  }, 200)

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
      />
    </label>
  )
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
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                      >
                        {column.render("Header")}

                        {column.isSorted && column.isSortedDesc && (
                          <SortDownIcon className="w-4 h-4 text-gray-400" />
                        )}
                        {column.isSorted && !column.isSortedDesc && (
                          <SortUpIcon className="w-4 h-4 text-gray-400" />
                        )}
                        {!column.isSorted && (
                          <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                {page.map((row) => {
                  prepareRow(row)
                  return (
                    <tr key={row} {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td
                          key={cell}
                          className="px-6 py-4 whitespace-nowrap"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex justify-between flex-1 sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="w-6 h-6" aria-hidden="true" />
              </PageButton>
              <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
