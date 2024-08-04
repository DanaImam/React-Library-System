import axios from 'axios';
import React, { useState } from 'react'
import {Button, TextField, Box, Grid, Paper} from '@mui/material';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [birthdate, setBDay] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {email, password,firstName,lastName,birthdate });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
            <TextField id="email" label="Email" type="email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <TextField id="password" label="Password" type="password" value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <TextField id="firstname" label="First Name" type="text" value={firstName} variant="outlined" onChange={(e) => setFName(e.target.value)} />
          </div>
          <div>
            <TextField id="lastname" label="Last Name" type="text" value={lastName} variant="outlined" onChange={(e) => setLName(e.target.value)} />
          </div>
          <div>
            <TextField id="birthdate" label=" " type="date" value={birthdate} variant="outlined" onChange={(e) => setBDay(e.target.value)} />
          </div>
        
          <Button variant="contained">Register</Button>
      </form>
    </div>
  );
}

export default Registration