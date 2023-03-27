import { useEffect, useState } from "react"
import { BigNumber } from "ethers"
import { useRouter } from "next/router"
import { useEnsAvatar, useEnsName } from "wagmi"
import ImageCard from "./ImageCard"
import balanceOfParticipationRewards from "../../lib/balanceOfParticipationRewards"
import truncateEthAddress from "../../lib/truncateEthAddress"
import Image from "next/image"

const NUMBER_OF_TOKENS = "0"

function CollectorPage() {
  const router = useRouter()
  const { collectorId } = router.query
  const [balance, setBalance] = useState(NUMBER_OF_TOKENS)
  const { data: ensName } = useEnsName({
    address: (collectorId as any) || "0x0",
    chainId: 1,
  })
  const { data: ensAvatar } = useEnsAvatar({
    address: (collectorId as any) || "0x0",
    chainId: 1,
  })

  useEffect(() => {
    const init = async () => {
      const response = await balanceOfParticipationRewards(collectorId as string)
      if (response.error) return
      setBalance(response.toString())
    }

    init()
  }, [collectorId])
  console.log("collectorId", collectorId)
  console.log("ensName", ensName)
  console.log("ensAvatar", ensAvatar)

  return (
    <div className="mt-3 flex flex-col">
      <div className="flex flex-col items-center justify-around text-4xl text-white pt-10 h-[75vh]">
        <div className="flex items-center gap-11">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ensAvatar || "/logo-cre8ors.png"}
            alt="pfp"
            width={100}
            height={100}
            className="rounded"
          />
          <div>
            <div>CRE8OR Profile</div>
            <div>{ensName || truncateEthAddress(collectorId as string)}</div>
          </div>
        </div>
        {BigNumber.from(balance).gt(0) && (
          <div className="flex flex-col items-center gap-5">
            <ImageCard
              imageUrl="https://nftstorage.link/ipfs/bafybeiaoglcj47pklfmwnxp6sd352y4fndr3ojopof7f3ciiaogshcz3au"
              title={`Participation Rewards: ${balance.toString()}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectorPage
