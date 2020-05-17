const Association = require('../models/Association');
const Player = require('../models/Player');
const City = require('../models/City');
const Edition = require('../models/Edition');
const { getIdByDescription } = require('../helpers/dataBaseHelper');

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

  const responsePlayerId = await getIdByDescription(playerId, playerNickname, 'nickname', Player);
  const responseCityId = await getIdByDescription(cityId, cityName, 'name', City);
  const responseInitialEditionId = await getIdByDescription(
    initialEditionId,
    initialEditionTitle,
    'title',
    Edition,
  );
  const responseFinalEditionId = await getIdByDescription(
    finalEditionId,
    finalEditionTitle,
    'title',
    Edition,
  );

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
