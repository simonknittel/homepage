const fs = require('fs')
const path = require('path')

const handlersDir = path.resolve(__dirname, '../handlers')
let allowedMethods = null

function getAllowedMethods() {
  if (allowedMethods) return allowedMethods

  let files = fs.readdirSync(handlersDir, { withFileTypes: true })

  files = files.filter(file => file.isFile())

  const fileNames = files.map(file => {
    return file.name
      .replace(/\.js$/, '')
      .toUpperCase()
  })

  allowedMethods = fileNames.join(', ')
  return allowedMethods
}

module.exports = getAllowedMethods
