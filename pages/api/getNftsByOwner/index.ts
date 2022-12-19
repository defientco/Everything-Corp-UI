import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { ownerAddress } = req.query
  console.log("ownerAddress", ownerAddress)
  console.log("process.env.ALCHEMY_API_KEY", process.env.ALCHEMY_API_KEY)
  try {
    const response = await axios.get(`https://eth-goerli.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getNFTs?owner=${ownerAddress}&contractAddresses%5B%5D=${process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS}`)
    console.log("data", response.data)
    res.status(200).json(response.data)
  } catch (err) {
    res.status(500).json(err)
  }
  
}
export default handler
