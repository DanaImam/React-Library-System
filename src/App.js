// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home'
import Login from './pages/Account/Login'
import UserProfile from './pages/Account/UserProfile'
import Registration from './pages/Account/Registration'
import AddBook from './pages/AddBook';
import ShowBooks from './pages/ShowBooks';
import AddStudent from './pages/AddStudent';
import ShowStudents from './pages/ShowStudents';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user-profile' element={<UserProfile />} />
      <Route path='/registration' element={<Registration />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/show-books" element={<ShowBooks />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/show-students" element={<ShowStudents />} />
    </Routes>
  );
}

export default App;
