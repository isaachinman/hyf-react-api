import express from 'express'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Register comment model
import 'models/comment'

// Instantiate comment model
const CommentModel = mongoose.model('Comment')

const blogAPI = express.Router()

// Get all
blogAPI.get('/comments', (req, res) => {
  CommentModel.find({}, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

// Get individual
blogAPI.get('/comments/:id', (req, res) => {
  CommentModel.findById(req.params.id, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

// Create new
blogAPI.post('/comments/create', (req, res) => {
  logger.info(req.body)
  CommentModel.create({ ...req.body }, (error) => {
    if (!error) {
      res.sendStatus(200)
    } else {
      res.status(400).send({ error: error.message })
    }
  })
})

export default blogAPI
