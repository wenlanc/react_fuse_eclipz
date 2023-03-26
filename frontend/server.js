const express = require('express');
const path = require('path');
const app = express();
const http = require("http");

app.use(express.static(path.join(__dirname, 'build')));


http.createServer(app).listen(3000, function (req, res) {
  console.log("Your http server is running on port: 3000");
});

app.get('/*', function (_, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});