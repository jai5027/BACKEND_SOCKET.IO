const http = require('http')
const path = require('path')
const express = require('express');
const { Server } = require("socket.io")

const app = express()
app.use(express.json())
app.use(express.static(path.resolve("./public")))
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (client) => {
    console.log("New user connected", Socket.id)
})

app.get('/', (req, res) => {
    return res.sendFile("/public/index.html")
})

module.exports = server