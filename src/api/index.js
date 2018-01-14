import express from 'express'

import blogEndpoints from 'api/blog'
import todoEndpoints from 'api/todo'

const api = express.Router()

api.use('/blog', blogEndpoints)
api.use('/todos', todoEndpoints)

export default api
