const http = require('http')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const port = parseInt(process.env.PORT, 10) || 3000
app.set('port', port)

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


require('./routes')(app)

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to REST API PBP'
}))

app.listen(3000, () => console.log(`Example app listening on port ${port}!`))