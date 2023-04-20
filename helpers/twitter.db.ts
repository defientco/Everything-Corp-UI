import dbConnect from "../utils/db"
import Spaces from "../Models/Twitter/Spaces"
import Tweets from "../Models/Twitter/Tweets"
import SpacesSchedule from "../Models/Twitter/SpacesSchedule"
import getLogger from "../utils/getLogger"

export const updateSpacesSchedule = async (docs: any) => {
  const logger = getLogger("Update Spaces Schedule")
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

export const updateSpacesStatus = async (body: {
  spaceId: string
  status?: string
  processed?: boolean
}) => {
  const logger = getLogger("Update Spaces Status")
  try {
    await dbConnect()
    logger.info("Updating space status for space: ", body.spaceId)
    logger.debug("Incoming data: ", body)
    const doc = await SpacesSchedule.findOne({ spaceId: body.spaceId })
    if (!doc.isNew) {
      doc.processed = body?.processed || false
      doc.status = body?.status || doc.status
      await doc.save()
    }
    return { sucess: true }
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const getSpacesSchedule = async () => {
  const logger = getLogger("Get Spaces Schedule")
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
  const logger = getLogger("Get Unprocessed Spaces")
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
interface SpacesData {
  spaceId: string
  participants?: string[]
  speakers?: string[]
}
export const addToSpaces = async (body: SpacesData[]) => {
  const logger = getLogger("Add to Spaces")
  try {
    await dbConnect()
    const promises = body.map(async (item: SpacesData) => {
      const doc = await Spaces.findOne({ spaceId: item.spaceId })
      if (!doc.isNew) {
        doc.participants = item.participants || doc.participants || []
        doc.speakers = item.speakers || doc.speakers || []
        await doc.save()
      } else {
        await Spaces.create(item)
      }
    })
    const result = await Promise.all(promises)
    return { sucess: true, result }
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}
export const getSpacesInfo = async (spaceId: string) => {
  const logger = getLogger("Get Spaces Info")
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
  const logger = getLogger("Get Count of Spaces as Speaker")
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
  const logger = getLogger("Get Likes and Retweet Count from DB")
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
  const logger = getLogger("Get Tweet IDs from DB")
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
  const logger = getLogger("Add Likes and Retweets")
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
