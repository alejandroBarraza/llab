import { Task } from '../model/Task.js'

// get all the tasks.
export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      order: [['dueDate', 'DESC']],
    })
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// create a new task
export async function createTask(req, res) {
  try {
    const { description, dueDate } = req.body
    const newTask = await Task.create({
      description,
      dueDate,
    })
    res.json(newTask)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// delete a task by id
export async function deleteTaskById(req, res, next) {
  console.log(req.params)
  try {
    const { id } = req.params
    const task = await Task.findByPk(id)

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    await task.destroy()

    res.json({ message: 'Tarea eliminada con éxito' })
  } catch (error) {
    // next(error)
    return res.status(500).json({ message: error.message })
  }
}

//update a task by id
export async function updateTaskById(req, res, next) {
  try {
    const { id } = req.params
    const { description, dueDate, isDone } = req.body

    const task = await Task.findByPk(id)

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    await task.update({ description, dueDate, isDone })

    res.json({ message: 'Tarea actualizada con éxito' })
  } catch (error) {
    // next(error)
    return res.status(500).json({ message: error.message })
  }
}
