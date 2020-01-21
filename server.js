const express = require('express');

const app = express();

const message = 'Hello world\n';
const port = 8080;

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port);