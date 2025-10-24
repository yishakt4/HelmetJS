const express = require('express');
const app = express();
const helmet = require('helmet');

// Enable Helmet
app.use(helmet());

// Remove the X-Powered-By header
app.use(helmet.hidePoweredBy());

// Example route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
