import _ from "lodash"
import { ApplicantDTO } from "../DTO/applicant.dto"
import AllowList from "../Models/AllowList"
import dbConnect from "../utils/db"

interface UpdateAllowListApplicant {
  creatorType?: string
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

export const getAllAllowListApplicants = async () => {
  try {
    await dbConnect()
    const result = await AllowList.find({}).lean()
    return result as any
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
    const originalResponseIds = currentDoc?.typeformResponses || []
    const newResponseIds = [
      { id: body.responseId, timestamp: body.timestamp },
      ...originalResponseIds,
    ]
    const result = await AllowList.findOneAndUpdate(
      { walletAddress: address },
      { typeformResponses: _.uniqBy(newResponseIds, "id"), currentResponseId: body.responseId },
    )
    return { sucess: true, result }
  } catch (e) {
    throw new Error(e)
  }
}

export const updateStatus = async (applicants: string[], status: string) => {
  try {
    await dbConnect()
    const [result] = await Promise.all(
      applicants.map(async (applicant) => {
        await AllowList.findOneAndUpdate({ tokenId: applicant }, { status })
      }),
    )
    return { sucess: true, result }
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}
export const addTokenIdToAllowListApplicant = async (address: string, tokenId: string) => {
  try {
    await dbConnect()
    const result = await AllowList.findOneAndUpdate({ walletAddress: address }, { tokenId })
    return { sucess: true, result }
  } catch (e) {
    throw new Error(e)
  }
}
