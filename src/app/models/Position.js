const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Position = sequelize.define('position', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Position;
