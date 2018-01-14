import mongoose, { Schema } from 'mongoose'

const CommentSchema = new Schema({
  author: {
    firstName: {
      type: String,
      min: 1,
      max: 50,
      required: true,
    },
    lastName: {
      type: String,
      min: 1,
      max: 50,
      required: true,
    },
    avatarURL: {
      type: String,
      min: 1,
      max: 500,
      default: 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg',
    },
  },
  date: { type: Date, default: Date.now },
  isLiked: { type: Boolean, default: false },
  text: {
    type: String,
    min: 1,
    max: 50,
    required: true,
  },
}, {

  // Throw errors for unspecified fields instead of quietly ignoring them
  strict: 'throw',

})

CommentSchema.set('toJSON', { getters: true, virtuals: false })

const CommentModel = mongoose.model('Comment', CommentSchema)

export default new CommentModel()
