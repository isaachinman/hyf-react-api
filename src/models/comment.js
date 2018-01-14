import mongoose, { Schema } from 'mongoose'

const CommentSchema = new Schema({
  author: {
    firstName: { type: String, min: 1, max: 50 },
    lastName: { type: String, min: 1, max: 50 },
    avatarURL: {
      type: String,
      default: 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg',
    },
  },
  date: { type: Date, default: Date.now },
  isLiked: { type: Boolean, default: false },
  text: { type: String, min: 1, max: 500 },
})

const CommentModel = mongoose.model('Comment', CommentSchema)

export default new CommentModel()
