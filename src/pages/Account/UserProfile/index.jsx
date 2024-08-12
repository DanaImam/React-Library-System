import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Define loading state
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user-profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch user profile.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>First Name: {user?.firstName || 'N/A'}</p>
          <p>Last Name: {user?.lastName || 'N/A'}</p>
          <p>Email: {user?.email || 'N/A'}</p>
          <p>Birthdate: {user?.birthdate ? new Date(user.birthdate).toDateString() : 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
