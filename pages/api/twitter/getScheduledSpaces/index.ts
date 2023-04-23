/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { updateSpacesSchedule } from "../../../../helpers/twitter.db"
import { getFutureSpaces } from "../../../../helpers/twitterHelperFx"
import getLogger from "../../../../utils/getLogger"

const logger = getLogger("Get Spaces Schedule")
class GetSpacesSchedule {
  @Get()
  async getSpacesSchedule() {
    logger.info("Updating spaces schedule")
    const { data, meta } = await getFutureSpaces()
    if (meta.result_count === 0) return { message: "No scheduled spaces found" }
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
