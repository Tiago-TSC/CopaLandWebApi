const Generation = require('../models/Generation');

const add = async generation => {
  return Generation.create(generation);
};

const addMany = async generations => {
  return Promise.all(generations.map(generation => add(generation)));
};

module.exports = {
  add,
  addMany,
};
