import axios from "axios"

const getNFTs = async (address: string, contractAddress: string) => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  const { data } = await axios.get(
    `https://eth-goerli.g.alchemy.com/nft/v2/${alchemyKey}/getNFTs?owner=${address}&contractAddresses%5B%5D=${contractAddress}`,
  )
  return data
}

export default getNFTs
