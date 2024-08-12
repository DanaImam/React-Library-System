import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { ExitToApp, Book, AddBox, ListAlt, School, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Grid container spacing={3}>
      {/* Show All Books */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <Book style={{ fontSize: 60 }} />
          <Typography variant="h6">Show All Books</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateTo('/show-books')}
            size="small"
          >
            View Books
          </Button>
        </Paper>
      </Grid>

      {/* Add New Book */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <AddBox style={{ fontSize: 60 }} />
          <Typography variant="h6">Add New Book</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateTo('/add-book')}
            size="small"
          >
            Add Book
          </Button>
        </Paper>
      </Grid>

      {/* Show All Students */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <School style={{ fontSize: 60 }} />
          <Typography variant="h6">Show All Students</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateTo('/show-students')}
            size="small"
          >
            View Students
          </Button>
        </Paper>
      </Grid>

      {/* Add New Student */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <AddBox style={{ fontSize: 60 }} />
          <Typography variant="h6">Add New Student</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateTo('/add-student')}
            size="small"
          >
            Add Student
          </Button>
        </Paper>
      </Grid>

      {/* User Profile */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <Person style={{ fontSize: 60 }} />
          <Typography variant="h6">User Profile</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateTo('/user-profile')}
            size="small"
          >
            View Profile
          </Button>
        </Paper>
      </Grid>

      {/* Logout */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>
          <ExitToApp style={{ fontSize: 60 }} />
          <Typography variant="h6">Logout</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            size="small"
          >
            Logout
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;