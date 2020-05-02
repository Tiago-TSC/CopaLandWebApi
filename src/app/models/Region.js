const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Region = sequelize.define('region', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Region;
