const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'danaimam123Ds',
  database: 'school_library_system'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
  console.log('Database connected');
});

// JWT Secret
const JWT_SECRET = '12345678';

// Middleware to authenticate tokens
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // No token

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
}

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to login' });
    }
    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ id: user.id }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

// User Profile Endpoint
app.get('/api/user-profile', authenticateToken, (req, res) => {
  const userId = req.user.id;
  db.query('SELECT email, firstName, lastName, birthdate FROM users WHERE id = ?', [userId], (error, results) => {
    if (error) {
      console.error('Error fetching user profile:', error);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// Add Book Endpoint
// Example endpoint in server.js
app.post('/api/books', authenticateToken, (req, res) => {
    const { title, author, genre, publicationDate } = req.body;
  
    // Validate input
    if (!title || !author || !genre || !publicationDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    // Query to insert a new book
    const query = 'INSERT INTO books (title, author, genre, publicationDate) VALUES (?, ?, ?, ?)';
    db.query(query, [title, author, genre, publicationDate], (error, results) => {
      if (error) {
        console.error('Error adding book:', error);
        return res.status(500).json({ message: 'Failed to add book' });
      }
      res.status(201).json({ message: 'Book added successfully' });
    });
  });
  
  
  
  
  // Show All Books Endpoint
  app.get('/api/show-books', authenticateToken, (req, res) => {
    db.query('SELECT * FROM books', (error, results) => {
      if (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ message: 'Failed to fetch books' });
      }
      res.json(results);
    });
  });
  
  // Add Student Endpoint
  app.post('/api/add-student', authenticateToken, (req, res) => {
    const { firstName, lastName, email, birthdate } = req.body;
    const query = 'INSERT INTO students (firstName, lastName, email, birthdate) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, birthdate], (error) => {
      if (error) {
        console.error('Error adding student:', error);
        return res.status(500).json({ message: 'Failed to add student' });
      }
      res.status(201).json({ message: 'Student added successfully' });
    });
  });
  
  // Show All Students Endpoint
  app.get('/api/show-students', authenticateToken, (req, res) => {
    db.query('SELECT * FROM students', (error, results) => {
      if (error) {
        console.error('Error fetching students:', error);
        return res.status(500).json({ message: 'Failed to fetch students' });
      }
      res.json(results);
    });
  });
  

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
