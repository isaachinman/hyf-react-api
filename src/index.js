/* Entry point */
import api from 'api'
import bodyParser from 'body-parser'
import config from 'config'
import cors from 'cors'
import docsGenerator from 'docs/generator'
import express from 'express'
import http from 'http'
import logger from 'utils/logger'
import mongoose from 'mongoose'

// Connect to DB
mongoose.Promise = Promise
mongoose.connection.openUri(config.dbURI)
  .then(() => logger.info('Mongoose is connected to MLAB database.'))
  .catch(err => logger.info(err))

// Instantiate express
const app = express()
app.server = http.createServer(app)

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
