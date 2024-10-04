import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1,height:'6rem',backgroundColor:'black' }}>
      <AppBar position="static" sx={{height:'5rem',backgroundColor:'black'}}>
        <Toolbar variant="dense">
        
          <Typography variant="h4" sx={{marginTop:'0.5rem'}} color="inherit" component="div">
      <b> <span style={{fontSize:'4rem'}}>A</span>R Shoping Store</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
