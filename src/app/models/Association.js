const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Association = sequelize.define('association', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Association;
