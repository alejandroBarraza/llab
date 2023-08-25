import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { SelectItem } from './SelectItem'
import TextField from '@mui/material/TextField'
import { searchTasks } from '../features/task/TaskSlice'
import { useDispatch } from 'react-redux'
export const ActionBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {}, [searchQuery])

  const onSearchText = () => {
    dispatch(
      searchTasks({
        text: searchQuery,
      })
    )
  }

  return (
    <Grid container marginBottom={4} marginTop={4}>
      <Grid item sm={6} textAlign='left'>
        <Button variant='outlined' size='small'>
          Liberar Seleccionadas
        </Button>
      </Grid>
      <Grid item sm={3}>
        <TextField
          id='outlined-basic'
          label='Buscar'
          variant='outlined'
          size='small'
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value)
          }}
        />
      </Grid>
      <Grid item sm={3} textAlign='right'>
        <SelectItem />
      </Grid>
    </Grid>
  )
}
