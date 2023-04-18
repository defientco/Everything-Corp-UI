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
    logger.info("Got spaces schedule", data)
    const updateData = data.map((space) => ({
      spaceId: space.id,
      status: space.state,
    }))
    try {
      const result = await updateSpacesSchedule(updateData)
      logger.info("Updated spaces schedule", result)
      return result
    } catch (e) {
      logger.error("Error updating spaces schedule", e)
      return e
    }
  }
}

export default createHandler(GetSpacesSchedule)
