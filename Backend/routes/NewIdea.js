
/*const express = require('express');
const multer = require('multer');
const Idea = require('../models/Idea');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Create a new idea
router.post('/new-idea', upload.single('image'), async (req, res) => {
  try {
    const {
      fullName,
      age,
      category,
      currentStage,
      email,
      telephoneNumber,
      businessProposal,
      targetAudience,
    } = req.body;

    const image = req.file ? req.file.filename : '';

   /* const newIdea = new Idea({
      fullName,
      age,
      category,
      currentStage,
      email,
      image,
      telephoneNumber,
      businessProposal,
      targetAudience,
    });

    await newIdea.save();
    res.status(201).json({ message: 'Idea created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;*/
