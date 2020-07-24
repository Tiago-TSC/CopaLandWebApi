const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');
const Region = require('./Region');

const State = sequelize.define('state', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  regionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Region,
      key: 'id',
    },
  },
});

module.exports = State;
