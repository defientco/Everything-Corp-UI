import { getAddress } from "ethers/lib/utils"
import Link from "next/link"
import { useEnsName } from "wagmi"
import truncateEthAddress from "../../lib/truncateEthAddress"
import PFP from "../PFP/PFP"

const LeaderboardRow = ({ address, numberOwned, rank, twitterHandle }) => {
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  })

  return (
    <tr key={address} className="bg-gray-100  hover:bg-blue-300">
      <td className="px-4 py-2 border-b">#{rank}</td>
      <td className="px-4 py-2 border-b">{numberOwned}</td>
      <td className="px-4 py-2 border-b flex items-center gap-3">
        <PFP address={getAddress(address)} height={25} width={25} />
        <Link href={`/collector/${address}`} type="button">
          {ensName || truncateEthAddress(address)}
        </Link>
      </td>
      <td className="px-4 py-2 border-b">{twitterHandle}</td>
    </tr>
  )
}

export default LeaderboardRow
