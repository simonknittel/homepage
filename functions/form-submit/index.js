const Airtable = require('airtable')

exports.main = function(req, res) {
  res.removeHeader('X-Powered-By')

  const allowedOrigins = process.env.CORS_ORIGINS.split(',')
  allowedOrigins.includes(req.get('Origin'))

  res.append('Access-Control-Allow-Origin', req.get('Origin'))
  res.append('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.append('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
    return
  }

  const base = new Airtable().base(req.body.baseId)

  const fields = {}
  for (const [ name, value ] of Object.entries(req.body.fields)) {
    fields[name] = value
  }

  base(req.body.tableName).create([
    { fields }
  ], (err) => {
    if (err) {
      console.error(err)
      res.sendStatus(500)
      return
    }

    res.sendStatus(201)
  })
}
