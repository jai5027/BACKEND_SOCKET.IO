const http = require('http')
const path = require('path')
const express = require('express');

const app = express()
app.use(express.json())

app.use(express.static(path.resolve("./public")))
const server = http.createServer(app)

app.get('/', (req, res) => {
    return res.sendFile("/public/index.html")
})

module.exports = server