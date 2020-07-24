const Sequelize = require('sequelize');

const sequelize = require('../services/databaseService');
const Generation = require('../models/Generation');

const Edition = sequelize.define('edition', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  generationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Generation,
      key: 'id',
    },
  },
});

module.exports = Edition;
