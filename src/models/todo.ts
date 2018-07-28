import { model, Schema } from 'mongoose'

const TodoSchema = new Schema({
  deadline: {
    required: true,
    type: Date,
  },
  description: {
    max: 500,
    min: 1,
    required: true,
    type: String,
  },
  done: {
    default: false,
    type: Boolean,
  },
}, {

  // Throw errors for unspecified fields instead of quietly ignoring them
  strict: 'throw',

})

TodoSchema.set('toJSON', { getters: true, virtuals: false })

const TodoModel = model('Todo', TodoSchema)

export default new TodoModel()
