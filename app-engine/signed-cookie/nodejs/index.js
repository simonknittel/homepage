const crypto = require('crypto')
const express = require('express')

const DOMAIN = process.env.DOMAIN
const KEY_NAME = process.env.KEY_NAME
const KEY_VALUE = process.env.KEY_VALUE

const app = express()
app.disable('x-powered-by')

let cookiePolicy = ''
let signature = ''

function base64(string) {
  return Buffer
    .from(string)
    .toString('base64')
}

function urlSafe(base64String) {
  return base64String
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

function createCookiePolicy() {
  const urlPrefix = 'https://' + DOMAIN

  const expiresDate = new Date()
  expiresDate.setHours(expiresDate.getHours() + 8)

  const expires = Math.floor(expiresDate.getTime() / 1000)

  cookiePolicy = `URLPrefix=${ urlSafe(base64(urlPrefix)) }:Expires=${ expires }:KeyName=${ KEY_NAME }`
}

function createSignature() {
  signature = crypto
    .createHmac('sha1', Buffer.from(KEY_VALUE, 'base64'))
    .update(cookiePolicy)
    .digest('base64')
}

app.get('/api/signed-cookie', (_, res) => {
  createCookiePolicy()
  createSignature()

  res
    .cookie('Cloud-CDN-Cookie', `${ cookiePolicy }:Signature=${ urlSafe(signature) }`, {
      domain: '.' + DOMAIN,
      path: '/',
      // file deepcode ignore WebCookieSecureDisabledByDefault: False positive
      secure: true,
      encode: String,
      // file deepcode ignore WebCookieHttpOnlyDisabledByDefault: False positive
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 8,
      sameSite: 'Lax'
    })
    .redirect(303, 'https://' + DOMAIN)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})
