const express = require('express');
const app = express();
const port = 3000;
const users = require('./users_mock.json');

// Mock user dat

// Route to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route to get a single user by id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
