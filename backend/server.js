const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, SafetyShield!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});