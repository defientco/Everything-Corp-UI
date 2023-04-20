/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2"
import { addLikesAndRetweets } from "../../../../helpers/twitter.db"
import { getAllLikes, getAllRetweets } from "../../../../helpers/twitterHelperFx"
import getLogger from "../../../../utils/getLogger"

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN)
const { readOnly } = client
const screenName = "cre8orsNFT"
const count = 100 // number of tweets to retrieve per request (max 100)
const untilDate = new Date(Date.now() - 10 * 1000).toISOString() // get current date in YYYY-MM-DD format
const sinceDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // get date 24 hours ago in YYYY-MM-DD format

const log = getLogger("Process Daily Tweets")
class Tweets {
  @Get()
  async getTweets() {
    try {
      const tweets = await readOnly.v2.search(`from:${screenName}`, {
        start_time: sinceDate,
        end_time: untilDate,
        max_results: count,
      })
      if (tweets.meta.result_count === 0) {
        log.info("No tweets found in last 24 hours")
        return { message: "No tweets found in last 24 hours" }
      }
      const tweetIDs = tweets.data.data.map((tweet) => tweet.id)
      const likes = await Promise.all(
        tweetIDs.map(async (tweetID) => ({
          [tweetID]: await getAllLikes(tweetID),
        })),
      )
      const retweets = await Promise.all(
        tweetIDs.map(async (tweetID) => ({
          [tweetID]: await getAllRetweets(tweetID),
        })),
      )
      const returnData = tweetIDs.map((tweetID) => ({
        tweetID,
        likes: likes.find((like) => like[tweetID])[tweetID],
        retweets: retweets.find((retweet) => retweet[tweetID])[tweetID],
        lastProcessed: Date.now(),
      }))
      const result = await addLikesAndRetweets(returnData)
      return result
    } catch (err) {
      log.error(err)
      return { err }
    }
  }
}

export default createHandler(Tweets)
