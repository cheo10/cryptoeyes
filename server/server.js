const express = require('express')
const { Client } = require('pg');
const lib = require('../lib');
const app = express()
const port = process.env.PORT || 3000
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  })


client.connect()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port 3000!'))
