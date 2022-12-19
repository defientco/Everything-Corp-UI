import { useAccount } from "wagmi"
import { useEffect, useState } from "react"
import axios from "axios"
import MintButton from "../MintButton"
import abi from "../../lib/abi-cre8ors.json"
import Cre8orTile from "../Cre8orTile"

function MintPage() {
  const { address } = useAccount()
  const [nfts, setNfts] = useState([])
  const contractAddress = String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS)

  useEffect(() => {
    const getNfts = async () => {
      const response = await axios.get(`/api/getNftsByOwner?ownerAddress=${address}`)
      const owned = response.data.ownedNfts
      setNfts(owned)
    }

    if (address) {
      getNfts()
    }
  }, [address])

  return (
    <div className="flex flex-col items-center justify-around text-4xl pt-10 h-[75vh]">
      <div>Mint Page</div>
      {nfts.map((nft) => (
        <Cre8orTile key={nft.id.tokenId} nft={nft} />
      ))}
      <MintButton contractAddress={contractAddress} abi={abi} />
    </div>
  )
}

export default MintPage
