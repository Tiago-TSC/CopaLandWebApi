const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');
const State = require('../models/State');

const City = sequelize.define('city', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  stateId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: State,
      key: 'id',
    },
  },
});

module.exports = City;
