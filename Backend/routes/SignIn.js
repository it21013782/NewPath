const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signin', (req, res) => {
  const { fullName, category, email, password, phoneNumber } = req.body;

  const newUser = new User({
    fullName,
    category,
    email,
    password,
    phoneNumber,
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

export default router;