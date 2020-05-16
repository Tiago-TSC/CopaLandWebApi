const Position = require('../models/Position');

const add = async position => {
  return Position.create(position);
};

const addMany = async positions => {
  return Promise.all(positions.map(position => add(position)));
};

module.exports = {
  add,
  addMany,
};
