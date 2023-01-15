import { ApplicantDTO } from "../DTO/applicant.dto"
import AllowList from "../Models/AllowList"
import dbConnect from "../utils/db"

interface UpdateAllowListApplicant {
  responseId?: string
  timestamp?: string
  tokenId?: string
}
export const addAllowListApplicant = async (body: ApplicantDTO) => {
  try {
    await dbConnect()
    const result = await AllowList.create(body)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}
export const getAllowListApplicant = async (address: string) => {
  try {
    await dbConnect()
    const result = await AllowList.findOne({ walletAddress: address }).lean()
    return result
  } catch (e) {
    throw new Error(e)
  }
}

export const updateAllowListApplicantResponseIds = async (
  address: string,
  body: UpdateAllowListApplicant,
) => {
  try {
    await dbConnect()
    const currentDoc = (await getAllowListApplicant(address)) as any
    const originalResponseIds = currentDoc?.responseIds || []
    const newResponseIds = [
      { responseId: body.responseId, timestamp: body.timestamp },
      ...originalResponseIds,
    ]
    const result = await AllowList.findOneAndUpdate(
      { walletAddress: address },
      { responseIds: newResponseIds, currentResponseId: body.responseId },
    )
    return { sucess: true, result }
  } catch (e) {
    throw new Error(e)
  }
}
