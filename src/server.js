const express = require('express');
const app = express();
const port = 3000;

// Import and use the users router
const usersRouter = require('./users/router');

// Use the users router for routes starting with '/api'
app.use('/api', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
