const Association = require('../models/Association');
const Player = require('../models/Player');
const City = require('../models/City');
const Edition = require('../models/Edition');

const getId = async (id, description, fieldName, model) => {
  let responseId = null;

  if (!isNaN(id)) {
    responseId = id;
  } else {
    if (description) {
      const response = await model.findAll({ where: { [fieldName]: description } });

      if (response.length > 0) {
        responseId = response[0].id;
      }
    }
  }

  return responseId;
};

const add = async association => {
  const {
    playerId,
    playerNickname,
    cityId,
    cityName,
    initialEditionId,
    initialEditionTitle,
    finalEditionId,
    finalEditionTitle,
  } = association;

  const responsePlayerId = await getId(playerId, playerNickname, 'nickname', Player);
  const responseCityId = await getId(cityId, cityName, 'name', City);
  const responseInitialEditionId = await getId(
    initialEditionId,
    initialEditionTitle,
    'title',
    Edition,
  );
  const responseFinalEditionId = await getId(finalEditionId, finalEditionTitle, 'title', Edition);

  if (responsePlayerId && responseCityId) {
    return Association.create({
      playerId: responsePlayerId,
      cityId: responseCityId,
      initialEditionId: responseInitialEditionId,
      finalEditionId: responseFinalEditionId,
    });
  } else {
    throw new Error('Jogador ou cidade não foram informados.');
  }
};

const addMany = async associations => {
  return Promise.all(associations.map(association => add(association)));
};

module.exports = {
  add,
  addMany,
};
