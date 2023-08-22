import express from 'express'

const app = express()

// Import routes
import taskRoutes from './routes/task.routes.js'

// Middlewares
app.use(express.json())

// Routes
app.use(taskRoutes)

export default app
