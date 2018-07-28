import * as express from 'express'
import { model } from 'mongoose'

import apiResponder from '../../utils/apiResponder'

// Register comment model
import '../../models/comment'

// Instantiate comment model
const CommentModel = model('Comment')

const blogAPI = express.Router()

// Get all
blogAPI.get('/comments', (req, res) => {
  CommentModel.find({}, (error, docs) => apiResponder(error, docs, res))
})

// Get individual
blogAPI.get('/comments/:id', (req, res) => {
  CommentModel.findById(req.params.id, (error, docs) => apiResponder(error, docs, res))
})

// Create new
blogAPI.post('/comments/create', (req, res) => {
  CommentModel.create({ ...req.body }, (error, docs) => apiResponder(error, docs, res))
})

// Edit existing
blogAPI.patch('/comments/:id', (req, res) => {
  CommentModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true },
    (error, docs) => apiResponder(error, docs, res))
})

// Delete
blogAPI.delete('/comments/:id', (req, res) => {
  CommentModel.findByIdAndRemove(req.params.id, (error, docs) => apiResponder(error, docs, res))
})

export default blogAPI
