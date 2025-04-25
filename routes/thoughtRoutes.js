const express = require('express');
const Thought = require('../models/Thought');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const thought = new Thought(req.body);
    await thought.save();
    res.status(201).json(thought);
  } catch (err) {
    res.status(500).json({ message: 'Error creating thought' });
  }
});


router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching thoughts' });
  }
});


router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching thought' });
  }
});

module.exports = router;
