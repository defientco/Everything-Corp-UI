import { ApplicantDTO } from "../DTO/applicant.dto"
import AllowList from "../Models/AllowList"
import dbConnect from "../utils/db"

export const addAllowListApplicant = async (body: ApplicantDTO) => {
  try {
    await dbConnect()
    const result = await AllowList.create(body)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}
