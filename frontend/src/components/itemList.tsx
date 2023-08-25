// import { useGetTasksQuery } from '../app/services/task'
import { useEffect } from 'react'
import Stack from '@mui/material/Stack'
import { ItemCard } from './ItemCard'
import { Task } from '../interfaces/types'
import { useSelector, useDispatch } from 'react-redux'
import { getTasksAsync } from '../features/task/TaskSlice'

export default function ItemList() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(getTasksAsync())
  }, [dispatch])

  return (
    <Stack spacing={4}>
      {tasks.map((task: Task) => (
        <ItemCard task={task} key={task.id} />
      ))}
    </Stack>
  )
}
