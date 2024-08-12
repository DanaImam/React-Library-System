import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const handleAddBook = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/books',
        { title, author, genre, publicationDate }, // Use publicationDate here
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Book added successfully!');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Book
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Author"
        variant="outlined"
        fullWidth
        margin="normal"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <TextField
        label="Genre"
        variant="outlined"
        fullWidth
        margin="normal"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <TextField
        label="Publication Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={publicationDate}
        onChange={(e) => setPublicationDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Add Book
      </Button>
    </Container>
  );
};

export default AddBook;
