import apiResponder from 'utils/apiResponder'
import express from 'express'
import mongoose from 'mongoose'

// Register todo model
import 'models/todo'

// Instantiate todo model
const TodoModel = mongoose.model('Todo')

const todoAPI = express.Router()

// Get all
todoAPI.get('/', (req, res) => {
  TodoModel.find({}, (error, docs) => apiResponder(error, docs, res))
})

// Get individual
todoAPI.get('/:id', (req, res) => {
  TodoModel.findById(req.params.id, (error, docs) => apiResponder(error, docs, res))
})

// Create new
todoAPI.post('/create', (req, res) => {
  TodoModel.create({ ...req.body }, (error, docs) => apiResponder(error, docs, res))
})

// Edit existing
todoAPI.patch('/:id', (req, res) => {
  TodoModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true },
    (error, docs) => apiResponder(error, docs, res))
})

// Delete
todoAPI.delete('/:id', (req, res) => {
  TodoModel.findByIdAndRemove(req.params.id, (error, docs) => apiResponder(error, docs, res))
})

export default todoAPI
