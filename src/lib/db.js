const Sequelize = require('sequelize')

const {
  LOG_LEVEL,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env

module.exports = new Sequelize(DB_NAME || 'api_example', DB_USER || 'api_example', DB_PASSWORD || 'api_example', {
  host: DB_HOST || 'localhost',
  port: DB_PORT ? parseInt(DB_PORT, 10) : 3306,
  dialect: 'mysql',
  logging: LOG_LEVEL === 'debug'
})
