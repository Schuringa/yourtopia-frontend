// server.js
const express = require('express')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
// const pathMatch = require('path-match')
const app = next({ dev })
const handle = app.getRequestHandler()
// const { URL } = require('url')

const server = express()
// const route = pathMatch()
server.use('/_next', express.static(path.join(__dirname, '.next')))
server.get('/', (req, res) => app.render(req, res, '/'))
server.get('/about', (req, res) => app.render(req, res, '/about'))
server.get('/contact-us', (req, res) => app.render(req, res, '/contact-us'))
server.get('/terms-and-conditions', (req, res) =>
  app.render(req, res, '/terms-and-conditions')
)
server.get('*', (req, res) => handle(req, res))

module.exports = server
