require('dotenv').config()
require('./models')

const express = require('express')
const cors = require('cors')
const winston = require('express-winston')
const createError = require('http-errors')
const http = require('http')
const logger = require('./lib/logger')
const accountsRouter = require('./routes/accounts')

// setup express

const app = express()

app.use(cors())
app.use(winston.logger({ winstonInstance: logger }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1.0', accountsRouter)

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.send({ error: err.message })
})

// server

const port = process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)
server.listen(port)

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges')
      process.exit(1)

    case 'EADDRINUSE':
      logger.error(bind + ' is already in use')
      process.exit(1)

    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

  logger.debug('Listening on ' + bind)
})
