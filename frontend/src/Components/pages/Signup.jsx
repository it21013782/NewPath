import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!fullName || !email || !telephone || !password || !confirmPassword || !category) {
      alert('Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please re-enter your password.');
      return;
    }

    // Validate the telephone number
    if (telephone.length !== 10 || !/^\d+$/.test(telephone)) {
      alert('Please enter a valid 10-digit telephone number.');
      return;
    }

    // Validate the email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Perform signup logic and redirect to a different page after signup
    navigate('/dashboard');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Telephone Number:</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="innovator">Innovator</option>
            <option value="investor">Investor</option>
            <option value="Small Business Owner">Small Business Owner</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/login" onClick={navigateToLogin}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
