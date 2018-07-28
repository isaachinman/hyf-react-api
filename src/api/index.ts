import { Router } from 'express'

import blogEndpoints from './blog'
import todoEndpoints from './todo'

const api: Router = Router()

api.use('/blog', blogEndpoints)
api.use('/todos', todoEndpoints)

export default api
