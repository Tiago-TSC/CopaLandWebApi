const Sequelize = require('sequelize');

const sequelize = require('../services/dataBaseService');

const Player = sequelize.define('player', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Player;
