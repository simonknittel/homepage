const Airtable = require('airtable')
const base = new Airtable().base('tbluyU5EcpyGt3RRq')

function get(req, res) {
  res.sendStatus(501)
}

module.exports = get
