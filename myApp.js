const express = require('express');
const app = express();

// add this:
const helmet = require('helmet');

// other middleware you already have...
app.use(helmet());   // enable helmet early, before your routes

// your routes / other app code...
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// don't change other code that the challenge provided
module.exports = app;
