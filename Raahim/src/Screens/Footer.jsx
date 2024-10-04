import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2, 
        backgroundColor: 'black',
        color:'white' 
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton aria-label="facebook" sx={{color:'white'}} size="small">
          <FacebookIcon sx={{fontSize:'2rem'}}/>
        </IconButton>
        <IconButton aria-label="twitter" sx={{color:'white'}}  size="small">
          <TwitterIcon sx={{fontSize:'2rem'}}/>
        </IconButton>
        <IconButton aria-label="instagram"  sx={{color:'white'}}size="small">
          <InstagramIcon sx={{fontSize:'2rem'}} />
        </IconButton>
      </Box>
      <Typography variant="h4" sx={{ marginLeft: 2,color:'white' }}>
        © Abdul Raahim
      </Typography>
    </Box>
  );
};

export default Footer;
