import express from 'express'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Register todo model
import 'models/todo'

// Instantiate todo model
const TodoModel = mongoose.model('Todo')

const todoAPI = express.Router()

// Get all
todoAPI.get('/', (req, res) => {
  TodoModel.find({}, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

// Get individual
todoAPI.get('/:id', (req, res) => {
  TodoModel.findById(req.params.id, (error, docs) => {
    if (error) logger.error(error)
    res.json(docs || error)
  })
})

// Create new
todoAPI.post('/create', (req, res) => {
  TodoModel.create({ ...req.body }, (error) => {
    if (!error) {
      res.sendStatus(200)
    } else {
      res.status(400).send({ error: error.message })
    }
  })
})

// Edit existing
todoAPI.put('/:id', (req, res) => {
  TodoModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true },
    (error, updatedDocument) => {
      if (!error) {
        res.status(200).send({ updatedDocument })
      } else {
        res.status(400).send({ error: error.message })
      }
    })
})

export default todoAPI
