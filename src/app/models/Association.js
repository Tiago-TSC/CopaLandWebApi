const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');
const City = require('../models/City');
const Player = require('../models/Player');
const Edition = require('../models/Edition');

const Association = sequelize.define('association', {
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
  cityId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: City,
      key: 'id',
    },
  },
  initialEditionId: {
    type: Sequelize.INTEGER,
    references: {
      model: Edition,
      key: 'id',
    },
  },
  finalEditionId: {
    type: Sequelize.INTEGER,
    references: {
      model: Edition,
      key: 'id',
    },
  },
});

module.exports = Association;
