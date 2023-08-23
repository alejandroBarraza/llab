import React from 'react'
import { Button, Grid } from '@mui/material'
import { SelectItem } from './SelectItem'
// import { SearchBar } from './SearchBar'
import TextField from '@mui/material/TextField'
export const ActionBar = () => {
  //   const handleSearch = (query: string) => {
  //     console.log('Search query:', query)
  //     // Aquí podrías implementar la lógica de búsqueda real
  //   }
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
        />
      </Grid>
      <Grid item sm={3} textAlign='right'>
        <SelectItem />
      </Grid>
    </Grid>
  )
}
