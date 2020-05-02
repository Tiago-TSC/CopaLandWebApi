const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Point = sequelize.define('point', {
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
  value: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Point;
