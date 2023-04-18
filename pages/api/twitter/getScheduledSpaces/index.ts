/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import * as log from "loglevel"
import { updateSpacesSchedule } from "../../../../helpers/twitter.db"
import { getFutureSpaces } from "../../../../helpers/twitterHelperFx"

const logger = log.getLogger("GetSpacesSchedule")
logger.setDefaultLevel("info")
class GetSpacesSchedule {
  @Get()
  async getSpacesSchedule() {
    logger.info("Updating spaces schedule")
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
