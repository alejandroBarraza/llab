import express from 'express'
import cors from 'cors'
const app = express()

// Import routes
import taskRoutes from './routes/task.routes.js'

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(taskRoutes)

export default app
