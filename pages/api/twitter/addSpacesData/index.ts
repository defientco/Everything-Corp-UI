/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2"
import {
  addToSpaces,
  getUnProcessedSpaces,
  updateSpacesStatus,
} from "../../../../helpers/twitter.db"

import getLogger from "../../../../utils/getLogger"

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN)
const { readOnly } = client
const log = getLogger("Add Spaces Data")
class Twitter {
  @Get()
  async getTweets() {
    try {
      const docs = await getUnProcessedSpaces()
      if (docs.length === 0) {
        log.info("No spaces to process")
        return { message: "No spaces to process" }
      }
      const spacesIds = docs.map((doc) => doc.spaceId)
      log.info("Processing spaces: ", spacesIds)
      const { data } = await readOnly.v2.spaces(spacesIds, {
        "space.fields": "participant_count",
        expansions: "invited_user_ids,speaker_ids,creator_id,host_ids",
      })
      const dbData = data.map((space) => ({
        spaceId: space.id,
        speakers: space.speaker_ids || [],
      }))
      const result = await addToSpaces(dbData)
      const promises = spacesIds.map(async (spaceId) =>
        updateSpacesStatus({ spaceId, processed: true }),
      )
      await Promise.all(promises)
      return result
    } catch (e) {
      log.error(e)
      throw e?.data
    }
  }
}

export default createHandler(Twitter)
