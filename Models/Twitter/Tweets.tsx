import { Schema, model, models, Model } from "mongoose"

interface Tweets {
  tweetID: string
  likes: string[]
  retweets: string[]
}
const TweetsSchema = new Schema<Tweets>({
  tweetID: {
    type: String,
    required: [true, "Please add a space id"],
  },
  likes: {
    type: [String],
    required: [true, "Please add array of likes"],
  },
  retweets: {
    type: [String],
    required: [true, "Please add array of retweets"],
  },
})

export default (models.Tweets as Model<Tweets>) || model("Tweets", TweetsSchema)
