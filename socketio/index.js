const express = require('express')
const http = require('http')
const path = require('path')
const Server = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

//socket io
io.on('connection', (socket) => {
    console.log("a new user has connected", socket.id);
})

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    res.sendFile('/public/index.html')
})

server.listen(9000, () => console.log('Server running on http://localhost:9000'))