/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body, Get } from "next-api-decorators"
import { ApplicantDTO } from "../../../DTO/applicant.dto"
import { db } from "../../../utils/db"

class AllowListApplicants {
  @Post()
  async addAllowListApplicant(@Body() body: ApplicantDTO) {
    console.log(body)
    const { twitterHandle, walletAddress, reason, creatorType } = body
    console.log(twitterHandle, walletAddress, reason, creatorType)
    const collection = db.collection("allowListApplicants")
    console.log("got database")
    const result = await collection.doc().set({
      twitterHandle,
      walletAddress,
      reason,
      creatorType,
    })
    console.log("added to database")
    return result
  }

  @Get()
  async helloWorld() {
    return "Hello World"
  }
}

export default createHandler(AllowListApplicants)
