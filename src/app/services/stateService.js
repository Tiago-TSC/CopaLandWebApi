const State = require('../models/State');
const Region = require('../models/Region');

const add = async state => {
  const { name, region } = state;

  const response = await Region.findAll({ where: { name: region } });
  console.log({ name, regionId: response[0].id });
  if (response.length > 0) {
    await State.create({ name, regionId: response[0].id });
  }
};

const addMany = async states => {
  await Promise.all(states.map(async state => add(state)));
};

module.exports = {
  add,
  addMany,
};
