import dbConnect from "../utils/db"
import Spaces from "../Models/Twitter/Spaces"
import Tweets from "../Models/Twitter/Tweets"

export const addToSpaces = async (body: any) => {
  const updateOps = body.map((item: any) => ({
    updateOne: {
      filter: { spaceID: item.spaceID },
      update: { $set: item },
      upsert: true,
    },
  }))
  try {
    await dbConnect()
    const result = await Spaces.bulkWrite(updateOps)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}

export const getCountOfSpacesAsSpeaker = async (speakerId: string) => {
  try {
    await dbConnect()
    const result = await Spaces.countDocuments({ speakers: speakerId })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getLikesAndRetweetCountFromDB = async (tweetId: string) => {
  try {
    await dbConnect()
    const likes = await Tweets.countDocuments({ likes: tweetId })
    const retweets = await Tweets.countDocuments({ retweets: tweetId })
    return { likes, retweets }
  } catch (error) {
    throw new Error(error)
  }
}
export const getTweetIDsFromDB = async () => {
  const query = {
    $or: [
      { lastProcessed: { $lt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) } },
      { lastProcessed: { $exists: false } },
    ],
  }
  try {
    await dbConnect()
    const result = await Tweets.find(query).lean()
    return result
  } catch (error) {
    throw new Error(error)
  }
}
export const addLikesAndRetweets = async (body: any) => {
  const updateOps = body.map((item: any) => ({
    updateOne: {
      filter: { tweetID: item.tweetID },
      update: { $set: item },
      upsert: true,
    },
  }))
  try {
    await dbConnect()
    const result = await Tweets.bulkWrite(updateOps)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}
