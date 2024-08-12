import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AddStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  // Define the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/add-student', {
        firstName,
        lastName,
        email,
        birthdate
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Student added successfully');
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setBirthdate('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Birthdate"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Student
        </Button>
      </form>
    </Container>
  );
};

export default AddStudent;
