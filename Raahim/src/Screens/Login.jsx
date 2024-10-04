import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from './Config/Firebase';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '2em',
  paddingBottom: '0.4em',
  backgroundColor: '#171717',
  borderRadius: '25px',
  transition: '.4s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '1px solid black',
  },
}));

const FieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5em',
  borderRadius: '25px',
  padding: '0.6em',
  backgroundColor: '#171717',
  boxShadow: 'inset 2px 5px 10px rgb(5, 5, 5)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  background: 'none',
  border: 'none',
  outline: 'none',
  color: '#d3d3d3',
  '& .MuiInputBase-input': {
    color: '#d3d3d3',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '0.5em 1.1em',
  borderRadius: '5px',
  marginRight: '0.5em',
  backgroundColor: '#252525',
  color: 'white',
  transition: '.4s ease-in-out',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

const ForgotButton = styled(Button)(({ theme }) => ({
  marginBottom: '3em',
  padding: '0.5em',
  borderRadius: '5px',
  backgroundColor: '#252525',
  color: 'white',
  transition: '.4s ease-in-out',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlelogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        navigate('/Homepage');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
        navigate('/Homepage');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormContainer sx={{ width: { xs: '60%', sm: '50%',lg:'40%' }, margin: 'auto' }}>
        <Typography id="heading" variant="h4" align="center" sx={{ color: 'white', marginY: '2em' }}>
          Login
        </Typography>
        <FieldContainer>
          <StyledTextField
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            placeholder="Email"
            type="email"
            fullWidth
            InputProps={{
              startAdornment: (
                <span>
                  <EmailIcon sx={{ color: 'white' }} />
                </span>
              ),
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <StyledTextField
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            placeholder="Password"
            type="password"
            fullWidth
            InputProps={{
              startAdornment: (
                <span>
                  <HttpsIcon sx={{ color: 'white' }} />
                </span>
              ),
            }}
          />
        </FieldContainer>
        <Box display="flex" justifyContent="center" flexDirection="row" marginTop="2.5em">
          <StyledButton variant="contained" onClick={handlelogin}>Login</StyledButton>
          <StyledButton variant="contained" onClick={() => navigate('/')}>Sign Up</StyledButton>
        </Box>
        <ForgotButton variant="contained" onClick={handleGoogle}>Sign in with Google</ForgotButton>
      </FormContainer>
    </Box>
  );
};

export default Login;
