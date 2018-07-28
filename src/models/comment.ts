import { model, Schema } from 'mongoose'

const CommentSchema = new Schema({
  author: {
    avatarURL: {
      default: 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg',
      max: 500,
      min: 1,
      type: String,
    },
    firstName: {
      max: 50,
      min: 1,
      required: true,
      type: String,
    },
    lastName: {
      max: 50,
      min: 1,
      required: true,
      type: String,
    },
  },
  date: { type: Date, default: Date.now },
  isLiked: { type: Boolean, default: false },
  text: {
    max: 50,
    min: 1,
    required: true,
    type: String,
  },
}, {

  // Throw errors for unspecified fields instead of quietly ignoring them
  strict: 'throw',

})

CommentSchema.set('toJSON', { getters: true, virtuals: false })

const CommentModel = model('Comment', CommentSchema)

export default new CommentModel()
