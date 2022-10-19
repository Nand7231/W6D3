const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getHTML, getCSS } = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.use(express.static('public'))

app.listen(4000, console.log('Server is running on 4000'))