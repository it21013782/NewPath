import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Protected() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setMessage('Error accessing protected data');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="container">
      <h2>Protected Route</h2>
      <p>{message}</p>
    </div>
  );
}

export default Protected;
