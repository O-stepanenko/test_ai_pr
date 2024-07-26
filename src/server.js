const express = require('express');
const app = express();
const port = 3000;

const usersRouter = require('./users/router');
const apartmentsRouter = require('./apartments/router');

app.use('/api', usersRouter);
app.use('/api', apartmentsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
