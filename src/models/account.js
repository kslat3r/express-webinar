const sequelize = require('sequelize')
const db = require('../lib/db')

module.exports = db.define('account', {
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  customer: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  }
})
