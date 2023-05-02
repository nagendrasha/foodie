import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            foodie
          </Typography>
          <Button color="inherit" onClick={()=>{navigate("/login")}} >Login</Button>
          <Button color="inherit" onClick={()=>{navigate("/signup")}}>SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header
