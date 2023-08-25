import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'
import { createTaskAsync } from '../features/task/TaskSlice'

export const AddItem = ({ handleClose }) => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = React.useState<Dayjs | null>(null)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createTaskAsync({
        description,
        dueDate,
      })
    )
    handleClose()
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            id='description'
            label='Agregar descripcion'
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value)
            }}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dueDate}
              onChange={(newDueDate) => setDueDate(newDueDate)}
            />
          </LocalizationProvider>
          <Button variant='contained' size='medium' onClick={handleSubmit}>
            Agregar
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
