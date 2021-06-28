const express = require('express')
const app = express()
const port = 4567

app.get('/', (req, res) => res.send('hello world'))

app.get('/reset-password', (req, res) => res.send('reset password'))

app.listen(port, () => console.log(`listening on port: ${port}`))
