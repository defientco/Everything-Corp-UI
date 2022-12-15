/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { ApplicantDTO } from "../../../DTO/applicant.dto"
import { db } from "../../../utils/db"
import { AllowListAuthGuard } from "../../../middleware/auth.middleware"
import { ApplicantRegistered } from "../../../middleware/unique.middleware"

class AllowListApplicants {
  @Post()
  @AllowListAuthGuard()
  @ApplicantRegistered()
  async addAllowListApplicant(@Body(ValidationPipe) body: ApplicantDTO) {
    const { twitterHandle, walletAddress, reason, creatorType } = body
    const collection = db.collection("allowListApplicants")
    try {
      console.log("Adding applicant to allow list")
      const result = await collection.doc().set({
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
