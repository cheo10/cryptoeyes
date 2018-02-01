const express = require('express')
const { Client } = require('pg')
const lib = require('../lib')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = express()
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})


client.connect()

nextApp.prepare()
  .then(() => {

    app.get('/', (req, res) => {
      return app.render(req, res, '/index', req.query)
    })


    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(port, (err) => {
      if (err) throw err
      if (process.env.NODE_ENV !== 'production') console.log(`> Ready on http://localhost:${port}`)
      console.log('environment: ', process.env.NODE_ENV)
      console.log('dev var: ', dev)
      console.log('port: ', process.env.PORT)
    })
  })
