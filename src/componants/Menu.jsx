import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Menu = () => {
  return (
   <>
  <Stack spacing={2} direction="row" sx={{mt:5}}>
      <Button variant="contained" color='warning' >Non-veg</Button>
      <Button variant="contained" color='success' >Veg</Button>
      <Button variant="contained">All</Button>
    </Stack>
   </>
  )
}

export default Menu
