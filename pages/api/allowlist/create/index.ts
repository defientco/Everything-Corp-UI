import { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../../utils/db"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { twitterHandle, walletAddress, formResponse } = req.body
  const collection = db.collection("allowListApplicants")
  const result = await collection.doc().set({
    twitterHandle,
    walletAddress,
    formResponse,
  })
  res.status(200).json(result)
}
export default handler
