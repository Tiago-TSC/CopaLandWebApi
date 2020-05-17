const Edition = require('../models/Edition');
const Generation = require('../models/Generation');
const { getIdByDescription } = require('../helpers/dataBaseHelper');

const add = async edition => {
  const { title, year, generationId, generationName } = edition;
  const responseGenerationId = await getIdByDescription(
    generationId,
    generationName,
    'name',
    Generation,
  );

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
