const express = require('express');
const bodyParser = require('body-parser');

const regionRoutes = require('./app/routes/regionRoutes');
const stateRoutes = require('./app/routes/stateRoutes');

server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(regionRoutes);
server.use(stateRoutes);

server.get('/', (req, res) => res.send('Service is running...'));

module.exports = server;
