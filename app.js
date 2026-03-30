const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, DevOps World!');
  res.send("<h1>CI/CD with Watchtower</h1>")
});

module.exports = app;
