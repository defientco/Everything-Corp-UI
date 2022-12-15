/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body } from "next-api-decorators"
import { ApplicantDTO } from "../../../DTO/applicant.dto"
import { db } from "../../../utils/db"

class AllowListApplicants {
  @Post()
  async addAllowListApplicant(@Body() body: ApplicantDTO) {
    const { twitterHandle, walletAddress, reason, creatorType } = body
    const collection = db.collection("allowListApplicants")
    try {
      const result = await collection.add({
        twitterHandle,
        walletAddress,
        reason,
        creatorType,
      })
      console.log("Applicant added to allow list")
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default createHandler(AllowListApplicants)
