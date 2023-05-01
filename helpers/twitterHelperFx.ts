import { TwitterApi } from "twitter-api-v2"
import getLogger from "../utils/getLogger"
/* eslint-disable no-await-in-loop */
const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN)
const CHILLPILL = "1549552848907644928"
const { readOnly } = client
const getLikes = async (tweetID) => readOnly.v2.tweetLikedBy(tweetID, { asPaginator: true })
const getRetweets = async (tweetID) => readOnly.v2.tweetRetweetedBy(tweetID, { asPaginator: true })
const parseLikes = (likes) => {
  const { data } = likes
  const returnData: Array<string> = data.data.map((like) => like.id)
  return returnData
}
export const getFutureSpaces = async () => {
  const logger = getLogger("Get Future Spaces")
  try {
    return readOnly.v2.spacesByCreators(CHILLPILL)
  } catch (e) {
    logger.error(e)
    return e.message
  }
}
const parseRetweets = (retweets) => {
  const { data } = retweets
  const returnData: Array<string> = data.data.map((retweet) => retweet.id)
  return returnData
}
export const getAllLikes = async (tweetID) => {
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
export const getAllRetweets = async (tweetID) => {
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
