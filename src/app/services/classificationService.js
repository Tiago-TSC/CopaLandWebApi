const Classification = require('../models/Classification');
const Player = require('../models/Player');
const Edition = require('../models/Edition');
const Position = require('../models/Position');
const { getIdByDescription } = require('../helpers/dataBaseHelper');

const add = async classification => {
  const {
    playerId,
    playerNickname,
    editionId,
    editionTitle,
    positionId,
    positionDescription,
  } = classification;

  const responsePlayerId = await getIdByDescription(playerId, playerNickname, 'nickname', Player);
  const responseEditionId = await getIdByDescription(editionId, editionTitle, 'title', Edition);
  const responsePositionId = await getIdByDescription(
    positionId,
    positionDescription,
    'description',
    Position,
  );

  if (responsePlayerId && responseEditionId && responsePositionId) {
    return Classification.create({
      playerId: responsePlayerId,
      editionId: responseEditionId,
      positionId: responsePositionId,
    });
  } else {
    throw new Error('Jogador, edição ou posição não foram informados.');
  }
};

const addMany = async classifications => {
  return Promise.all(classifications.map(classification => add(classification)));
};

module.exports = {
  add,
  addMany,
};
