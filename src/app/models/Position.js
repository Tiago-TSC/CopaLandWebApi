const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');

const Position = sequelize.define('position', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING(3),
    allowNull: false,
  },
  points: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Position;
