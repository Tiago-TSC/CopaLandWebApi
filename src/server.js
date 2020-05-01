const express = require('express');

server = express();

server.get('/', (req, res) => res.send('Service is running...'));

module.exports = server;
