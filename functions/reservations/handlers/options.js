const getAllowedMethods = require('../shared/getAllowedMethods')

function options(req, res) {
  res.append('Allow', getAllowedMethods())
  res.sendStatus(204)
}

module.exports = options
