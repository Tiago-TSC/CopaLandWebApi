const Edition = require('../models/Edition');
const Generation = require('../models/Generation');

const add = async edition => {
  const { title, year, generationId, generationName } = edition;
  let responseGenerationId = null;

  if (!isNaN(generationId)) {
    responseGenerationId = generationId;
  } else {
    if (generationName) {
      const response = await Generation.findAll({ where: { name: generationName } });

      if (response.length > 0) {
        responseGenerationId = response[0].id;
      }
    }
  }

  if (responseGenerationId) {
    return Edition.create({ title, year, generationId: responseGenerationId });
  } else {
    throw new Error('Nome ou Id da geração não foi informado.');
  }
};

const addMany = async editions => {
  return Promise.all(editions.map(edition => add(edition)));
};

module.exports = {
  add,
  addMany,
};
