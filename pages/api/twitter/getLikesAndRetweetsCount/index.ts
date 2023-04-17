/* eslint-disable class-methods-use-this */
import { createHandler, Get, Query } from "next-api-decorators"
import { getLikesAndRetweetCountFromDB } from "../../../../helpers/twitter.db"

class LikesAndRetweetCount {
  @Get()
  async getLikesAndRetweetCount(@Query("twitterId") twitterId: string) {
    return getLikesAndRetweetCountFromDB(twitterId)
  }
}

export default createHandler(LikesAndRetweetCount)
