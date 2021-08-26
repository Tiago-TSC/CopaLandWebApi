const Association = require('../models/Association');
const Classification = require('../models/Classification');
const City = require('../models/City');
const Player = require('../models/Player');
const Region = require('../models/Region');
const State = require('../models/State');
const Position = require('../models/Position');
const Edition = require('../models/Edition');

const add = async player => {
  return Player.create(player);
};

const addMany = async players => {
  return Promise.all(players.map(player => add(player)));
};

const get = async () => {
  const players = await Player.findAll({
    include: [
      {
        model: City,
        attributes: ['name'],
        include: {
          model: State,
          include: { model: Region, attributes: ['name'] },
          attributes: ['name'],
        },
      },
      {
        model: Classification,
        attributes: ['editionId'],
        include: [
          { model: Edition, attributes: ['title'] },
          { model: Position, attributes: ['description'] },
        ],
      },
    ],
    attributes: ['nickname'],
  }).map(player => {
    const city = player.cities[player.cities.length - 1];

    return {
      nickname: player.nickname,
      region: city.state.region.name,
      state: city.state.name,
      city: city.name,
    };
  });

  return players;
};

module.exports = {
  add,
  addMany,
  get,
};
