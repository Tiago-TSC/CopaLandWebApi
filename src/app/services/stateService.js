const State = require('../models/State');
const Region = require('../models/Region');

const add = async state => {
  const { name, regionId, regionName } = state;
  let responseRegionId = null;

  if (!isNaN(regionId)) {
    responseRegionId = regionId;
  } else {
    if (regionName) {
      const response = await Region.findAll({ where: { name: regionName } });

      if (response.length > 0) {
        responseRegionId = response[0].id;
      }
    }
  }

  if (responseRegionId) {
    await State.create({ name, regionId: responseRegionId });
  } else {
    throw new Error('Nome ou Id da região não foi informado.');
  }
};

const addMany = async states => {
  await Promise.all(states.map(async state => add(state)));
};

module.exports = {
  add,
  addMany,
};
