/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { ApplicantDTO } from "../../../DTO/applicant.dto"
import dbConnect from "../../../utils/db"
import AllowList from "../../../Models/AllowList"

class AllowListApplicants {
  @Post()
  async addAllowListApplicant(@Body(ValidationPipe) body: ApplicantDTO) {
    try {
      console.log("connecting to db")
      await dbConnect()
      console.log("connected to db")
      console.log("writing to db")
      const result = await AllowList.create(body)
      console.log("wrote to db")
      return { sucess: true, result }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default createHandler(AllowListApplicants)
