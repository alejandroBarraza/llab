import { Stack, Button, CardContent, Card } from '@mui/material'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { updateDateAsync } from '../features/task/TaskSlice'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const EditItem = ({ handleClose, task }) => {
  const dispatch = useDispatch()
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(task.dueDate))

  const handleChangeDate = () => {
    dispatch(
      updateDateAsync({
        id: task.id,
        dateDue: date,
      })
    )
    handleClose()
  }

  return (
    <Card sx={style}>
      <CardContent>
        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
            <DatePicker
              value={date}
              onChange={(newDueDate) => setDate(newDueDate)}
            />
          </LocalizationProvider>
          <Button variant='outlined' onClick={handleChangeDate}>
            Aceptar
          </Button>
          <Button variant='outlined' color='error' onClick={handleClose}>
            Cancelar
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
