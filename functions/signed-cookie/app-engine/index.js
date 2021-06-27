const { main } = require("../shared")
const express = require('express')

const app = express()
app.disable('x-powered-by')

app.get('/api/signed-cookie', (_, res) => {
  main(res)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})
