/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import log from "loglevel"
import { updateSpacesSchedule } from "../../../../helpers/twitter.db"
import { getFutureSpaces } from "../../../../helpers/twitterHelperFx"

class GetSpacesSchedule {
  @Get()
  async getSpacesSchedule() {
    log.info("Updating spaces schedule")
    const { data } = await getFutureSpaces()
    const updateData = data.map((space) => ({
      spaceId: space.id,
      status: space.state,
    }))
    const result = await updateSpacesSchedule(updateData)
    return result
  }
}

export default createHandler(GetSpacesSchedule)
