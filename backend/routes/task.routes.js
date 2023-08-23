import { Router } from 'express'
import {
  getTasks,
  createTask,
  deleteTaskById,
  updateTaskById,
} from '../controllers/task.controller.js'
const router = Router()

router.get('/tasks', getTasks)
router.post('/task', createTask)
router.put('/task/:id', updateTaskById)
router.delete('/task/:id', deleteTaskById)

export default router
