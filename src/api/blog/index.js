import express from 'express'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Register comment model
import 'models/comment'

// Instantiate comment model
const CommentModel = mongoose.model('Comment')

const blogAPI = express.Router()

blogAPI.get('/', (req, res) => {
  CommentModel.find({}, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

export default blogAPI
