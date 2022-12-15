/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body, ValidationPipe, Get } from "next-api-decorators"
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
    const result = await collection.doc().set({
      twitterHandle,
      walletAddress,
      reason,
      creatorType,
    })
    return result
  }

  @Get()
  async helloWorld() {
    return "Hello World"
  }
}

export default createHandler(AllowListApplicants)
