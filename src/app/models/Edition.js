const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Edition = sequelize.define('edition', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Edition;
