/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2"
import { addToSpaces } from "../../../../helpers/twitter.db"

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN)
const { readOnly } = client
class Twitter {
  @Post()
  async getTweets(@Body() body: { ids: string[] }) {
    try {
      const spacesIds = body.ids
      const { data } = await readOnly.v2.spaces(spacesIds, {
        "space.fields": "participant_count",
        expansions: "invited_user_ids,speaker_ids,creator_id,host_ids",
      })
      const dbData = data.map((space) => ({
        spaceId: space.id,
        speakers: space.speaker_ids || [],
      }))
      const result = await addToSpaces(dbData)
      return result
    } catch (e) {
      throw e?.data
    }
  }
}

export default createHandler(Twitter)
