import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'
import { corsIoOptions, corsMiddleware } from './middlewares/cors.js'
import { v4 as uuidv4 } from 'uuid'
import { EVENTS } from './constants.js'
import { PartyEvents } from './events/partyEvents.js'

const port = process.env.PORT ?? 3000
const app = express()
app.disable('x-powered-by')
const server = http.createServer(app)
const io = new SocketServer(server)

io.on('connection', (socket) => {
    console.log(`Client connected ${socket.id}`)

    socket.on(EVENTS.CREATE_PARTY, (message) =>
        PartyEvents.createParty(socket, message)
    )
    socket.on(EVENTS.JOIN_PARTY, (message) =>
        PartyEvents.joinParty(socket, message)
    )
    socket.on(EVENTS.LEAVE_PARTY, (message) =>
        PartyEvents.leaveParty(socket, message)
    )
    socket.on(EVENTS.DESTROY_PARTY, (message) =>
        PartyEvents.destroyParty(socket, message)
    )
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
