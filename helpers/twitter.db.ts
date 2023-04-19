import * as log from "loglevel"
import dbConnect from "../utils/db"
import Spaces from "../Models/Twitter/Spaces"
import Tweets from "../Models/Twitter/Tweets"
import SpacesSchedule from "../Models/Twitter/SpacesSchedule"

const logger = log.getLogger("TwitterDB")
logger.setDefaultLevel("info")
export const updateSpacesSchedule = async (docs: any) => {
  try {
    await dbConnect()
    const resultPromises = docs.map((doc: any) =>
      SpacesSchedule.updateOne(
        { spaceId: doc.spaceId },
        { $set: { status: doc.status } },
        { upsert: true },
      ),
    )
    const results = await Promise.all(resultPromises)
    return { sucess: true, results }
  } catch (error) {
    logger.error(error)
    return error
  }
}

export const updateSpacesStatus = async (body) => {
  try {
    await dbConnect()
    const result = await SpacesSchedule.updateOne(
      { spaceId: body.id },
      { $set: { processed: body.processed } },
    )
    return { sucess: true, result }
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const getSpacesSchedule = async () => {
  try {
    await dbConnect()
    const result = await SpacesSchedule.find({ status: "live" }).lean()
    return result
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}

export const getUnProcessedSpaces = async () => {
  try {
    await dbConnect()
    const result = await SpacesSchedule.find({
      status: "ended",
      $or: [{ processed: false }, { processed: { $exists: false } }],
    }).lean()
    return result
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const addToSpaces = async (body: any) => {
  const updateOps = body.map((item: any) => ({
    updateOne: {
      filter: { spaceId: item.spaceID },
      update: { $set: { speakers: item.speakers } },
      upsert: true,
    },
  }))
  try {
    await dbConnect()
    const result = await Spaces.bulkWrite(updateOps)
    return { sucess: true, result }
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const getSpacesInfo = async (spaceId: string) => {
  try {
    await dbConnect()
    const result = await Spaces.find({ spaceId })
    return result
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const getCountOfSpacesAsSpeaker = async (speakerId: string) => {
  try {
    await dbConnect()
    const result = await Spaces.countDocuments({ speakers: speakerId })
    return result
  } catch (error) {
    logger.error(error)
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
    logger.error(error)
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
    logger.error(error)
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
    logger.error(error)
    throw new Error(error)
  }
}
