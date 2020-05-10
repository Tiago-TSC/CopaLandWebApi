const Region = require('../models/Region');

const add = async region => {
  return Region.create(region);
};

const addMany = async regions => {
  return Promise.all(regions.map(region => add(region)));
};

module.exports = {
  add,
  addMany,
};
