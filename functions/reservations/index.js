const cors = require('./middleware/cors')
const getAllowedMethods = require('./shared/getAllowedMethods')
const getHandlers = require('./shared/getHandlers')

function main(req, res) {
  cors(req, res)

  if (getAllowedMethods().includes(req.method) === false) {
    res.append('Allow', getAllowedMethods())
    res.sendStatus(405)
    return
  }

  getHandlers()[req.method](req, res)
}

exports.main = main
