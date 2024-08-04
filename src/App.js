// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/Home'
import Login from './pages/Account/Login'
import UserProfile from './pages/Account/UserProfile'
import Registration from './pages/Account/Registration'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user-profile' element={<UserProfile />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
