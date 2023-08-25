import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// get all tasks
export const getTasksAsync = createAsyncThunk(
  'tasks/getTasksAsync',
  async () => {
    const resp = await fetch('http://localhost:4000/tasks')
    if (resp.ok) {
      const tasks = await resp.json()
      return { tasks }
    }
  }
)

// crate anew task
export const createTaskAsync = createAsyncThunk(
  'tasks/addTaskAsync',
  async (payload) => {
    console.log(payload)
    const resp = await fetch('http://localhost:4000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: payload.description,
        dueDate: payload.dueDate,
      }),
    })

    if (resp.ok) {
      const task = await resp.json()
      return { task }
    }
  }
)

// update checked button
export const toggleCompleteAsync = createAsyncThunk(
  'tasks/completeTodoAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:4000/task/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: payload.id, isDone: payload.isDone }),
    })

    if (resp.ok) {
      const task = await resp.json()
      return { task }
    }
  }
)

export const updateDateAsync = createAsyncThunk(
  'tasks/updateTaskAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:4000/task/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: payload.id, dueDate: payload.dueDate }),
    })

    if (resp.ok) {
      const task = await resp.json()
      return { task }
    }
  }
)

// delete task
export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTodoAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:4000/task/${payload.id}`, {
      method: 'DELETE',
    })

    if (resp.ok) {
      return { id: payload.id }
    }
  }
)

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    createTask: (state, action) => {
      const task = {
        description: action.payload.description,
        dueDate: action.payload.dueDate,
      }
      state.push(task)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      state[index].isDone = action.payload.isDone
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    },

    searchTasks: (state, action) => {
      state = state.filter((task) => task.description.toLowerCase().includes())
    },
  },

  extraReducers: {
    [getTasksAsync.fulfilled]: (state, action) => {
      return action.payload.tasks
    },
    [createTaskAsync.fulfilled]: (state, action) => {
      state.push(action.payload.task)
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      console.log(action.payload)
      const index = state.findIndex(
        (task) => task.id === action.payload.task.id
      )
      state[index].isDone = action.payload.task.isDone
    },

    [updateDateAsync.fulfilled]: (state, action) => {
      console.log(action.payload)
      const taskUpdate = state.find(
        (task) => task.id === action.payload.task.id
      )
      console.log(taskUpdate)
      taskUpdate.dateDue = action.payload.task.dateDue
    },

    [deleteTaskAsync.fulfilled]: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { createTask, toggleComplete, deleteTask, searchTasks } =
  taskSlice.actions

export default taskSlice.reducer
