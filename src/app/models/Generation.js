const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');

const Generation = sequelize.define('generation', {
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
});

module.exports = Generation;
