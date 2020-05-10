const Player = require('../models/Player');

const add = async player => {
  return Player.create(player);
};

const addMany = async players => {
  return Promise.all(players.map(player => add(player)));
};

module.exports = {
  add,
  addMany,
};
