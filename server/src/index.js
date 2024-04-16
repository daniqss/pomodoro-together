import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'
import { corsIoOptions, corsMiddleware } from './middlewares/cors.js'
import { v4 as uuidv4 } from 'uuid'

const port = process.env.PORT ?? 3000
const app = express()
app.disable('x-powered-by')
const server = http.createServer(app)
const io = new SocketServer(server)

io.on('connection', (socket) => {
    console.log(`Client connected ${socket.id}`)

    socket.on('create-party', () => {
        const partyCode = uuidv4()
        socket.join(partyCode)
        socket.emit('party-code', partyCode)
        console.log(`Party created: ${partyCode}`)
    })
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
