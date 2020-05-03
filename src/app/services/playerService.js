const Player = require('../models/Player');

const add = async player => {
  await Player.create(player);
};

const addMany = async players => {
  await Promise.all(players.map(async player => add(player)));
};

module.exports = {
  add,
  addMany,
};
