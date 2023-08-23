import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const SelectItem = () => {
  const [order, setOrder] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value)
  }
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id='demo-simple-select-label'>Ordenar</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={order}
        label='order'
        onChange={handleChange}
      >
        <MenuItem value={10}>Fecha de Creacion</MenuItem>
        <MenuItem value={20}>Fecha de Vencimiento</MenuItem>
        <MenuItem value={30}>Atrasada</MenuItem>
      </Select>
    </FormControl>
  )
}
