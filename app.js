const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const message = 'Hello, DevOps World!';
  const html = "<h1>CI/CD with Watchtower.</h1>";
  res.status(200).send(`${message} ${html}`);
});

module.exports = app;
