const path = require('path')
const { getAllowedMethods } = require('./getAllowedMethods')

const handlersDir = path.resolve(__dirname, '../handlers')
let handlers = null

function getHandlers() {
  if (handlers) return handlers

  handlers = {}

  const methods = getAllowedMethods().split(', ')
  methods.forEach(method => {
    handlers[method] = require(path.resolve(handlersDir, `${ method.toLowerCase() }.js`))
  })

  return handlers
}

module.exports = getHandlers
