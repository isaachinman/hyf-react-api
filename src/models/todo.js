import mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
  done: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    min: 1,
    max: 500,
    required: true,
  },
}, {

  // Throw errors for unspecified fields instead of quietly ignoring them
  strict: 'throw',

})

TodoSchema.set('toJSON', { getters: true, virtuals: false })

const TodoModel = mongoose.model('Todo', TodoSchema)

export default new TodoModel()
