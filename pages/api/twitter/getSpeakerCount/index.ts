/* eslint-disable class-methods-use-this */
import { createHandler, Get, Query } from "next-api-decorators"
import { getCountOfSpacesAsSpeaker } from "../../../../helpers/twitter.db"

class SpeakerCount {
  @Get()
  async getSpeakerCount(@Query("twitterId") twitterId: string) {
    return getCountOfSpacesAsSpeaker(twitterId)
  }
}

export default createHandler(SpeakerCount)
