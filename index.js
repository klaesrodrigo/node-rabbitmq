const express = require('express')
const { sendMessage } = require('./src/controller/message')
const app = express()

app.use(express.json())

app.post('/test', sendMessage)

app.listen(3000, () => console.log('Running...'))
