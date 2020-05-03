const express = require('express');
const bodyParser = require('body-parser');

const regionRoutes = require('./app/routes/regionRoutes');
const stateRoutes = require('./app/routes/stateRoutes');
const cityRoutes = require('./app/routes/cityRoutes');
const playerRoutes = require('./app/routes/playerRoutes');

server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(regionRoutes);
server.use(stateRoutes);
server.use(cityRoutes);
server.use(playerRoutes);

server.get('/', (req, res) => res.send('Service is running...'));

module.exports = server;
