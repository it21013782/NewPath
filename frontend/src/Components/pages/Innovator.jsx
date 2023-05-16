import React, { useState } from 'react';
import axios from 'axios';

const InnovatorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    summary: '',
    problem: '',
    solution: '',
    audience: '',
    usp: '',
    currentstage: '',
    awards: '',
    category: '', // New category field
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/innovator/add', formData);
      alert('Innovator details submitted successfully');
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        title: '',
        summary: '',
        problem: '',
        solution: '',
        audience: '',
        usp: '',
        currentstage: '',
        awards: '',
        category: '',
      });
    } catch (error) {
      console.error('Error submitting innovator details:', error);
      alert('An error occurred while submitting the innovator details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

      <label htmlFor="company">Company:</label>
      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />

      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

      <label htmlFor="summary">Summary:</label>
      <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} required />

      <label htmlFor="problem">Problem:</label>
      <textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} required />

      <label htmlFor="solution">Solution:</label>
      <textarea id="solution" name="solution" value={formData.solution} onChange={handleChange} required />

      <label htmlFor="audience">Target Audience:</label>
      <input type="text" id="audience" name="audience" value={formData.audience} onChange={handleChange} required />

      <label htmlFor="usp">Unique Selling Proposition:</label>
      <input type="text" id="usp" name="usp" value={formData.usp} onChange={handleChange} required />

      <label htmlFor="currentstage">Current Stage:</label>
      <input type="text" id="currentstage" name="currentstage" value={formData.currentstage} onChange={handleChange} required />

      <label htmlFor="awards">Awards:</label>
      <input type="text" id="awards" name="awards" value={formData.awards} onChange={handleChange} required />
      
      <label htmlFor="category">Category:</label>
      <select id="category" name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select a category</option>
        <option value="Technology">Technology</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        <option value="Energy">Renewable Energy and Sustainability</option>
        <option value="consumerp">Consumer Products and Services</option>
        <option value="Education">Education</option>
        <option value="Transportation and Mobility">Transportation and Mobility</option>
       
        

        
      </select>




      <button type="submit">Submit</button>
    </form>
  );
};

export default InnovatorForm;
