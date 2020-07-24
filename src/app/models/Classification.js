const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');
const Player = require('../models/Player');
const Edition = require('../models/Edition');
const Position = require('../models/Position');

const Classification = sequelize.define('classification', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  playerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Player,
      key: 'id',
    },
  },
  editionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Edition,
      key: 'id',
    },
  },
  positionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Position,
      key: 'id',
    },
  },
});

module.exports = Classification;
