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
    logger.info('Error: ', JSON.stringify(error))
    logger.info('Docs: ', JSON.stringify(docs))
  })
  res.json({ message: 'Getting blog content.' })
})

export default blogAPI
