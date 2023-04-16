/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2"
import { addLikesAndRetweets } from "../../../../helpers/twitter.db"

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN)
const { readOnly } = client
const screenName = "cre8orsNFT"
const count = 100 // number of tweets to retrieve per request (max 100)
const untilDate = new Date(Date.now() - 10 * 1000).toISOString() // get current date in YYYY-MM-DD format
const sinceDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // get date 24 hours ago in YYYY-MM-DD format
const getLikes = async (tweetID) => readOnly.v2.tweetLikedBy(tweetID, { asPaginator: true })
const getRetweets = async (tweetID) => readOnly.v2.tweetRetweetedBy(tweetID, { asPaginator: true })
const parseLikes = (likes) => {
  const { data } = likes
  const returnData: Array<string> = data.data.map((like) => like.id)
  return returnData
}
const parseRetweets = (retweets) => {
  const { data } = retweets
  const returnData: Array<string> = data.data.map((retweet) => retweet.id)
  return returnData
}
const getAllLikes = async (tweetID) => {
  const liked = await getLikes(tweetID)
  let likes = []
  likes = [...parseLikes(liked)]
  if (liked.meta.result_count === 0) return []
  while (liked.meta.next_token) {
    const tmp = await liked.fetchNext()
    likes = [...likes, ...parseLikes(tmp)]
  }
  return likes
}
const getAllRetweets = async (tweetID) => {
  const retweeted = await getRetweets(tweetID)
  let retweets = []
  if (retweeted.meta.result_count === 0) return []
  retweets = [...parseRetweets(retweeted)]
  while (retweeted?.meta?.next_token) {
    const tmp = await retweeted.fetchNext()
    retweets = [...retweets, ...parseRetweets(tmp)]
  }
  return retweets
}
class Tweets {
  @Get()
  async getTweets() {
    try {
      const tweets = await readOnly.v2.search(`from:${screenName}`, {
        start_time: sinceDate,
        end_time: untilDate,
        max_results: count,
      })
      if (tweets.meta.result_count === 0) return { message: "No tweets found" }
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
      }))
      const result = await addLikesAndRetweets(returnData)
      return result
    } catch (err) {
      return { err }
    }
  }
}

export default createHandler(Tweets)
