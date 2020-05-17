const City = require('../models/City');
const State = require('../models/State');
const { getIdByDescription } = require('../helpers/dataBaseHelper');

const add = async city => {
  const { name, stateId, stateName } = city;

  const responseStateId = await getIdByDescription(stateId, stateName, 'name', State);

  if (responseStateId) {
    return City.create({ name, stateId: responseStateId });
  } else {
    throw new Error('Nome ou Id do estado não foi informado.');
  }
};

const addMany = async cities => {
  return Promise.all(cities.map(city => add(city)));
};

module.exports = {
  add,
  addMany,
};
