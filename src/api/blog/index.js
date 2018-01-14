import express from 'express'

const blogAPI = express.Router()

blogAPI.get('/', (req, res) => {
  res.json({ message: 'Getting blog content.' })
})

export default blogAPI
