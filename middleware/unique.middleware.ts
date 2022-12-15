import { NextApiRequest, NextApiResponse } from "next"
import { createMiddlewareDecorator, NextFunction, ConflictException } from "next-api-decorators"
import { db } from "../utils/db"

export const ApplicantRegistered = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const { walletAddress } = req.body
    const collection = db.collection("allowListApplicants")
    const result = await collection.where("walletAddress", "==", walletAddress).get()
    if (result.empty) {
      next()
    } else {
      throw new ConflictException("Applicant already registered")
    }
  },
)
