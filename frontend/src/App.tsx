// import React from 'react'
import ItemList from './components/itemList'
import { Container } from '@mui/material'
import { Header } from './components/Header'
import { format } from 'date-fns'
import { ActionBar } from './components/ActionBar'
import { AdditemButton } from './components/AdditemButton'
import { es } from 'date-fns/locale'
import './App.css'

function App() {
  const currentDate = new Date()
  const formattedDate = format(currentDate, 'dd/MM/yyyy', { locale: es })

  return (
    <Container maxWidth='md'>
      <Header currentDate={formattedDate}>Cosas por hacer</Header>
      <ActionBar />
      <ItemList />
      <AdditemButton />
    </Container>
  )
}

export default App
