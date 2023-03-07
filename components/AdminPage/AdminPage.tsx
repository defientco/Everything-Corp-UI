import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useUserProvider } from "../../providers/UserProvider"
import Table from "./components/Table"
import StatusPill from "./components/StatusPill"
import SelectColumnFilter from "./components/SelectColumFilter"

type ITableDatum = {
  walletAddress: string
  tokenId: string
  twitterHandle: string
  reason: string
  status: "Review" | "Accepted" | "Rejected"
}
type ITableData = Array<ITableDatum>
const AdminPage = () => {
  const { user } = useUserProvider()
  const [data, setData] = useState([])
  const tableData: ITableData = useMemo(
    () =>
      data.map((datum) => {
        const { walletAddress, tokenId, twitterHandle, reason, status } = datum
        return {
          walletAddress,
          tokenId,
          twitterHandle,
          reason,
          status,
        }
      }),
    [data],
  )
  const columns = useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: StatusPill,
      },
      {
        Header: "Wallet Address",
        accessor: "walletAddress",
      },
      {
        Header: "Token ID",
        accessor: "tokenId",
      },
      {
        Header: "Twitter Handle",
        accessor: "twitterHandle",
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
    ],
    [],
  )
  const getData = useCallback(async () => {
    const res = await axios.get("/api/allowlist/allData", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
      },
    })
    const results = await res.data
    setData(results)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    user?.issuer && (
      <div className="h-screen bg-gray-100 text-white-900">
        <main className="min-w-full px-4 pt-4 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h1 className="text-xl font-semibold">Current Allowlist Applicants</h1>
          </div>
          <div className="mt-4">
            <Table columns={columns} data={tableData} />
          </div>
        </main>
      </div>
    )
  )
}
export default AdminPage
