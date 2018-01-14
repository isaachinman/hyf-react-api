import express from 'express'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Register todo model
import 'models/todo'

// Instantiate todo model
const TodoModel = mongoose.model('Todo')

const todoAPI = express.Router()

todoAPI.get('/', (req, res) => {
  TodoModel.find({}, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

export default todoAPI
