const Airtable = require('airtable')

exports.main = function(req, res) {
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
