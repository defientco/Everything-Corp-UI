import { useEffect, useState } from "react"
import { useSigner } from "wagmi"
import { BigNumber } from "ethers"
import { useRouter } from "next/router"
import abi from "../../lib/abi-cre8ors.json"
import MintButton from "../MintButton"
import ImageCard from "./ImageCard"
import balanceOfParticipationRewards from "../../lib/balanceOfParticipationRewards"
import truncate from "../../lib/truncate"

function CollectorPage() {
  const { data: signer } = useSigner()
  const router = useRouter()
  const { collectorId } = router.query
  const [balance, setBalance] = useState("0")
  const contractAddress = String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS)

  useEffect(() => {
    const init = async () => {
      const response = await balanceOfParticipationRewards(collectorId as string)
      if (response.error) return
      setBalance(response.toString())
    }

    if (!signer) return
    init()
  })

  return (
    <div className="mt-3 flex flex-col">
      <div className="flex flex-col items-center justify-around text-4xl text-white pt-10 h-[75vh]">
        <div>CRE8OR Profile - {truncate(collectorId as string)}</div>
        {BigNumber.from(balance).gt(0) ? (
          <div className="flex flex-col items-center gap-5">
            <ImageCard
              imageUrl="https://nftstorage.link/ipfs/bafybeiaoglcj47pklfmwnxp6sd352y4fndr3ojopof7f3ciiaogshcz3au"
              title={`Participation Rewards: ${balance.toString()}`}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div> please mint a CRE8OR Participation Rewards before visiting a profile</div>
            <MintButton contractAddress={contractAddress} abi={abi} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectorPage
