const Region = require('../models/Region');

const add = async region => {
  await Region.create(region);
};

const addMany = async regions => {
  await Promise.all(regions.map(async region => add(region)));
};

module.exports = {
  add,
  addMany,
};
