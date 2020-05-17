const State = require('../models/State');
const Region = require('../models/Region');
const { getIdByDescription } = require('../helpers/dataBaseHelper');

const add = async state => {
  const { name, regionId, regionName } = state;

  const responseRegionId = await getIdByDescription(regionId, regionName, 'name', Region);

  if (responseRegionId) {
    return State.create({ name, regionId: responseRegionId });
  } else {
    throw new Error('Nome ou Id da região não foi informado.');
  }
};

const addMany = async states => {
  return Promise.all(states.map(state => add(state)));
};

module.exports = {
  add,
  addMany,
};
