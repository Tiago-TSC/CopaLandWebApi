const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Generation = sequelize.define('generation', {
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

module.exports = Generation;
