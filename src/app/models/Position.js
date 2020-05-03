const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');
const Player = require('../models/Player');
const Edition = require('../models/Edition');
const Point = require('../models/Point');

const Position = sequelize.define('position', {
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
  pointId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Point,
      key: 'id',
    },
  },
});

module.exports = Position;
