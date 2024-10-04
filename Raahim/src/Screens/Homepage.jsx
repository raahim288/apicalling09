import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Typography, Box, Grid, Grid2 } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
const navigate=useNavigate()
  
const [output,setOutput]=useState([]);
    const Get_data=async()=>{
       const res =await axios.get('https://fakestoreapi.com/products')
       setOutput(res.data)
    
    }
    useEffect(()=>{
        Get_data()
    },[])
    console.log(output)
  return (
    <>

    <Navbar/>
    <br />
    <br />
<Grid    container spacing={3} sx={{ padding: 2 }}>
      {output.map((e, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <Box
            sx={{
              
              marginLeft:{xs:'2.3rem',sm:'1rem'},
              borderRadius:'2rem',
              backgroundColor: 'white',
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.09)',
              padding: '2rem', // equivalent to p-9
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem', // equivalent to space-y-3
              height: {xs:'490px',sm:'460px'},
              width:{xs:'60%',sm:'70%'},
               boxShadow: 5, // You can adjust the shadow level (0-24)
            transition: '0.3s'
            }}
          >
            <Box
              sx={{
                width: '6rem', // equivalent to w-24
                height: '6rem', // equivalent to h-24
                backgroundColor: 'violet',
                borderRadius: '50%',
                position: 'absolute',
                right: '-1.25rem', // equivalent to -right-5
                top: '-1.75rem', // equivalent to -top-7
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '1.5rem', // equivalent to text-2xl
                  position: 'absolute',
                  bottom: '1.5rem', // equivalent to bottom-6
                  left: '1.75rem', // equivalent to left-7
                }}
              >
                {e.id}
              </Typography>
            </Box>
            <Box sx={{ width: '100%', height: '240px', overflow: 'hidden' }}>
              
              <img
                src={e.image}
                alt={e.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  marginTop: '3rem',
                }}
              />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {e.title}
            </Typography>
            <Typography variant="h6" sx={{ color: 'gray', lineHeight: 1.5 }}>
            <b>{e.price}</b>
            </Typography>
            <Button
            fullWidth
            sx={{ marginTop: 'auto', marginBottom: '16px',backgroundColor:'black',borderRadius:'2rem',height:'3rem',fontSize:'1.2rem' }}
            variant="contained"
            onClick={() => navigate(`/Details/${e.id}`)}
          >
            Add
          </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
    <br />
    <br />
<Footer/>
{/* 


  <div>
      
  
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      padding="20px"
      gap="20px"
      >
      {output.map((e, i) => (
        
        <Card key={i} sx={{ width: 300, height: 460, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
         
          <img src={e.image} height={240} width={340} alt={e.title} style={{ objectFit: 'cover' }} />
          <Typography variant="h6" sx={{ marginTop: '16px' }}>{e.title}</Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}><b>{e.price}</b></Typography>
          <Button
            fullWidth
            sx={{ marginTop: 'auto', marginBottom: '16px' }}
            variant="contained"
            onClick={() => navigate(`/Next/${e.id}`)}
          >
            Add
          </Button>
        </Card>
      ))}
    </Box>
    </div> */}
    </>
  )
}

export default Homepage
