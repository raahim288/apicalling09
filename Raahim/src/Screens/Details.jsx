import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Typography, Box, Grid } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  // const [singledata, setSingledata] = useState([]);

  const [singledata, setSingledata] = useState(null); // Initialize as null
  const Get_data = async () => {

// Inside your Get_data function
const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
setSingledata([res.data]); // Set the single object directly

  };

  useEffect(() => {
    Get_data();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Grid container spacing={3} sx={{ padding: 2, justifyContent: 'center' }}>
        {singledata?.map((e, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Box
              sx={{
                marginLeft:{xs:'0.9rem',sm:'1rem'},
                borderRadius: '2rem',
                backgroundColor: 'white',
                boxShadow: 5,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
             
             overflow:'hidden',
                width: { xs: '75%', sm: '80%' },
              }}
            >
              <Box
                sx={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: 'violet',
                  borderRadius: '50%',
                  position: 'absolute',
                  right: '-1.25rem',
                  top: '-1.75rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.5rem',
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.75rem',
                  }}
                >
                  {e.id}
                </Typography>
              </Box>
              <Box sx={{ width: '100%', height: '240px' }}>
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
              <Typography variant="h5" sx={{ fontWeight: 'bold',marginTop:'4rem' }}>
                {e.title}
              </Typography>
              <Typography variant="h6" sx={{ color: 'gray', lineHeight: 1.5 }}>
                <b><u>Price:</u>{e.price}</b>
              </Typography>
              <Typography variant="h6" sx={{ color: 'gray', lineHeight: 1.5 }}>
                <b><u>DESC:</u>{e.description}</b>
              </Typography>
              <Typography variant="h5" sx={{ color: 'black', lineHeight: 1.5 }}>
                <b><u>Category:</u>{e.category}</b>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Details;
