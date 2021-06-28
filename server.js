const express = require('express')
const app = express()
const port = 4567
const { Pool } = require('pg')

pool = new Pool({
  database: 'group_project_test',
  password: 'test',
})

app.get('/', (req, res) => res.send('hello world'))

app.get('/reset-password', (req, res) => res.send('reset password'))
console.log("Ryan's change");

app.listen(port, () => console.log(`listening on port: ${port}`))
