import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:3000', 'http://localhost:3001']

const ACCEPTED_WEB_SOCKET_ORIGINS = [
    'http://localhost:5171',
    'http://localhost:5172',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:5176'
]

export const corsMiddleware = cors({
    origin: (origin, callback) => {
        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
})

export const corsIoOptions = {
    cors: {
        origin: ACCEPTED_WEB_SOCKET_ORIGINS,
        methods: ['GET', 'POST']
    }
}
