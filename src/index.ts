import * as bodyParser from 'body-parser'

import * as cors from 'cors'
import * as express from 'express'
import * as http from 'http'
import * as mongoose from 'mongoose'

// Local Modules
import api from './api'
import config from './config'
import docsGenerator from './docs/generator'
import logger from './utils/logger'

// Connect to DB
// mongoose.Promise = Promise
mongoose.connection.openUri(config.dbURI)
  .then(() => logger.info('Mongoose is connected to MLAB database.'))
  .catch((err) => logger.info(err))

// Instantiate express
const app: express.Application = express()

// CORS (unsafe)
app.use(cors())

// Use JSON and limit body size
app.use(bodyParser.json({
  limit: config.bodyLimit,
}))

// Load API
app.use('/', api)

// Load docs
docsGenerator(app, mongoose)

// Start listening
app.listen(config.port, () => {
  logger.info(`API is listening on port ${config.port}.`)
})
