import { Grid, Typography } from '@mui/material'
import React from 'react'

type HeaderProps = {
  children: string
  currentDate: string
}

export const Header: React.FC<HeaderProps> = ({ children, currentDate }) => {
  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      spacing={5}
    >
      <Grid item xs={8}>
        <Typography variant='h4' align='left'>
          {children}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h6'>Hoy: {currentDate}</Typography>
      </Grid>
    </Grid>
  )
}
