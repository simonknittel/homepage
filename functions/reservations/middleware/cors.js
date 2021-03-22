function cors(req, res) {
  res.removeHeader('X-Powered-By')

  const allowedOrigins = process.env.CORS_ORIGINS.split(',')
  allowedOrigins.includes(req.get('Origin'))

  res.append('Access-Control-Allow-Origin', req.get('Origin'))
  res.append('Access-Control-Allow-Methods', getAllowedMethods())
  res.append('Access-Control-Allow-Headers', 'Content-Type')
}

module.exports = cors
