const express = require('express');
const bodyParser = require('body-parser');

const regionRoutes = require('./app/routes/regionRoutes');
const stateRoutes = require('./app/routes/stateRoutes');
const cityRoutes = require('./app/routes/cityRoutes');
const playerRoutes = require('./app/routes/playerRoutes');
const generationRoutes = require('./app/routes/generationRoutes');
const editionRoutes = require('./app/routes/editionRoutes');
const positionRoutes = require('./app/routes/positionRoutes');
const associationRoutes = require('./app/routes/associationRoutes');
const classificationRoutes = require('./app/routes/classificationRoutes');
const rankingRoutes = require('./app/routes/rankingRoutes');
const sendError = require('./app/services/errorService');

server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(regionRoutes);
server.use(stateRoutes);
server.use(cityRoutes);
server.use(playerRoutes);
server.use(generationRoutes);
server.use(editionRoutes);
server.use(positionRoutes);
server.use(associationRoutes);
server.use(classificationRoutes);
server.use(rankingRoutes);

server.get('/', (req, res) => res.send('Service is running...'));

server.use((error, req, res, next) => {
  sendError(res, error);
});

module.exports = server;
