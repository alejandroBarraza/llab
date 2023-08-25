import React from 'react'
import { Button, Modal, Box } from '@mui/material'
import { AddItem } from './AddItem'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: '5px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const AdditemButton: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box>
      <Button onClick={handleOpen} variant='outlined' fullWidth>
        +
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <AddItem handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  )
}
