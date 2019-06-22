const fs = require('fs')
const path = require('path')

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('index.js') === -1
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))

    model.sync()
  })
