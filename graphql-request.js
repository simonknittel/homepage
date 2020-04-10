const fs = require('fs')
const path = require('path')
const https = require('https')
const query = require('./query').query

fs.readFile(path.join(__dirname, './dist/index.html'), 'utf8', function (err, html) {
  if (err) throw err

  const data = JSON.stringify({
    variables: { locale: 'en' },
    query
  })

  const options = {
    hostname: 'graphql.datocms.com',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      Authorization: 'Bearer 83956640cf317cab838d08c35d9767'
    }
  }

  const req = https.request(options, res => {
    let jsonString = ''
    res.on('data', d => { jsonString += d })

    res.on('end', () => {
      const newHtml = html.replace('</head>', `<script>window.response=${jsonString}</script></head>`)
      fs.writeFile(path.join(__dirname, 'dist', 'index.html'), newHtml, 'utf8', () => {})
    })
  })

  req.on('error', error => { throw error })

  req.write(data)
  req.end()
})
