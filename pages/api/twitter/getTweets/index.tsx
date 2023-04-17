/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { getTweetIDsFromDB, addLikesAndRetweets } from "../../../../helpers/twitter.db"
import { getAllLikes, getAllRetweets } from "../../../../helpers/twitterHelperFx"

class ProcessNewTweets {
  @Get()
  async getTweets() {
    try {
      const tweets = await getTweetIDsFromDB()
      const tweetIDs = tweets.map((tweet) => tweet.tweetID)
      if (!tweetIDs.length) return { err: "No tweets found to process" }
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
      return { err }
    }
  }
}

export default createHandler(ProcessNewTweets)
