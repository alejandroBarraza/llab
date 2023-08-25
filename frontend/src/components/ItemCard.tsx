import React from 'react'
import {
  CardContent,
  Card,
  Grid,
  Checkbox,
  Typography,
  Stack,
  IconButton,
  Modal,
  Button,
  Box,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
// import { Task } from '../interfaces/types'
import dayjs from 'dayjs'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useDispatch } from 'react-redux'
import {
  deleteTaskAsync,
  toggleCompleteAsync,
  updateDateAsync,
} from '../features/task/TaskSlice'
import { updateCacheWithNewRows } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils'
import { EditItem } from './EditItem'

export const ItemCard = ({ task }) => {
  const [checked, setChecked] = React.useState(task.isDone)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  const handleCheked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    dispatch(
      toggleCompleteAsync({
        id: task.id,
        isDone: !checked,
      })
    )
  }

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item sm={1}>
            <Checkbox
              checked={checked}
              onChange={handleCheked}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Grid>
          <Grid item sm={5} textAlign='left'>
            <Typography variant='subtitle1'>{task.description}</Typography>
          </Grid>
          <Grid item sm={3}>
            <Stack direction='row' alignItems='center'>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale='es'
              >
                <DatePicker disabled defaultValue={dayjs(task.dueDate)} />
              </LocalizationProvider>
              <AccessAlarmIcon sx={{ paddingLeft: 2 }} />
            </Stack>
          </Grid>
          <Grid item sm={3}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='flex-end'
            >
              <IconButton onClick={handleOpen}>
                <EditIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <EditItem handleClose={handleClose} task={task} />
              </Modal>

              <IconButton
                onClick={() =>
                  dispatch(
                    deleteTaskAsync({
                      id: task.id,
                    })
                  )
                }
              >
                <DeleteIcon />
              </IconButton>

              {/* <EditItem description={task.description} dueDate={task.dueDate} /> */}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
