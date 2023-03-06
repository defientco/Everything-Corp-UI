/* eslint-disable @next/next/no-img-element */
import { toast } from "react-toastify"
import { allChains, useNetwork, useSigner, useSwitchNetwork } from "wagmi"
import getIpfsLink from "../../lib/getIpfsLink"
import { processStaking } from "../../lib/staking"

const StakingCard = ({ token, stakedTokens, onSuccess, nftContract }) => {
  const myTokenId = parseInt(token.id.tokenId, 16)
  const imgHash = token.metadata?.image
  const isInvalid = imgHash?.includes?.("imgUri") || imgHash?.includes?.("Hello World")
  const imageUrl = isInvalid ? "" : getIpfsLink(imgHash)
  const isStaked = stakedTokens.includes(myTokenId.toString())
  const { data: signer } = useSigner()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const handleClick = async () => {
    if (!signer) {
      toast.error("please connect wallet")
      return
    }
    if (chain.id !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      await switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
      const myChain = allChains.find(
        (blockchain) => blockchain.id === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      )
      toast.error(`Please connect to ${myChain.name} and try again`)
      return
    }
    if (isStaked) {
      await processStaking(nftContract, myTokenId, onSuccess, false)
    } else {
      await processStaking(nftContract, myTokenId, onSuccess, true)
    }
  }
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={imageUrl || "/docs/images/blog/image-1.jpg"} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TOKEN ID #{myTokenId}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleClick()}
        >
          {isStaked ? "Unstake" : "Stake"}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default StakingCard
