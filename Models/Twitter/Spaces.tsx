import { Schema, model, models, Model } from "mongoose"

interface Spaces {
  spaceId: string
  speakers: string[]
}
const SpacesSchema = new Schema<Spaces>({
  spaceId: {
    type: String,
    required: [true, "Please add a space id"],
  },
  speakers: {
    type: [String],
    required: [true, "Please add array of speakers"],
  },
})

export default (models.Spaces as Model<Spaces>) || model("Spaces", SpacesSchema)
