const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');

const Region = sequelize.define('region', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = Region;
