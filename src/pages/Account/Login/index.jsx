import axios from 'axios';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Box, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');  // Redirect to home page on successful login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Assuming 401 status code for unauthorized access
        setError('User does not exist or incorrect password.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">Login</Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </div>
  );
};

export default Login;
