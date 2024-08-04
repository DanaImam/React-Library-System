import axios from 'axios';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import {Button, TextField, Box, Grid, Paper} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField id="email" label="email" type="email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <TextField id="password" label="password" type="password" value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button variant="contained">Login</Button>
        </form>
      </div>
    );
}

export default Login