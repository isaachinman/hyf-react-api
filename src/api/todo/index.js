import express from 'express'

const todoAPI = express.Router()

todoAPI.get('/', (req, res) => {
  res.json({ message: 'Getting todo content.' })
})

export default todoAPI
