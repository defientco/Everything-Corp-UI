import dbConnect from "../utils/db"
import Spaces from "../Models/Twitter/Spaces"

export const addToSpaces = async (body: any) => {
  try {
    await dbConnect()
    const result = await Spaces.insertMany(body)
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
