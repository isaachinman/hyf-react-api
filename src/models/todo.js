import mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
  done: { type: Boolean, default: false },
  deadline: { type: Date, default: Date.now },
  description: { type: String, min: 1, max: 500 },
})

const TodoModel = mongoose.model('Todo', TodoSchema)

export default new TodoModel()
