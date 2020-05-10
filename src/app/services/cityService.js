const City = require('../models/City');
const State = require('../models/State');

const add = async city => {
  const { name, stateId, stateName } = city;
  let responseStateId = null;

  if (!isNaN(stateId)) {
    responseStateId = stateId;
  } else {
    if (stateName) {
      const response = await State.findAll({ where: { name: stateName } });

      if (response.length > 0) {
        responseStateId = response[0].id;
      }
    }
  }

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
