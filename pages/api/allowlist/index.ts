import { NextApiResponse, NextApiRequest } from "next"

import { db } from "../../../utils/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { twitterHandle, walletAddress, reason, creatorType } = req.body
  console.log(req.body)
  const collection = db.collection("allowListApplicants")
  const result = await collection.add({
    twitterHandle,
    walletAddress,
    reason,
    creatorType,
  })
  console.log("done! ", result)
  res.status(200).json({ result })
}
