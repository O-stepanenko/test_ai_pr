const express = require('express');
const router = express.Router();

// Mock user data
const users = require('../users_mock.json');

// Route to get all users
router.get('/users', (req, res) => {
  res.json(users);
});

// Route to get a single user by id
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
