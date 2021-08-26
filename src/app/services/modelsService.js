const sequelize = require('./databaseService');
const Region = require('../models/Region');
const State = require('../models/State');
const City = require('../models/City');
const Association = require('../models/Association');
const Player = require('../models/Player');
const Edition = require('../models/Edition');
const Generation = require('../models/Generation');
const Classification = require('../models/Classification');
const Position = require('../models/Position');

const init = async () => {
  Region.hasMany(State);
  State.belongsTo(Region);
  State.hasMany(City);
  City.belongsTo(State);
  City.belongsToMany(Player, {
    through: Association,
    foreignKey: { name: 'cityId' },
  });
  Player.belongsToMany(City, {
    through: Association,
    foreignKey: { name: 'playerId' },
  });
  Edition.hasOne(Association, { as: 'initialEdition' });
  Edition.hasOne(Association, { as: 'finalEdition' });
  Generation.hasMany(Edition);
  Player.hasMany(Classification);
  Edition.hasMany(Classification);
  Classification.belongsTo(Edition);
  Position.hasMany(Classification);
  Classification.belongsTo(Position);
  sequelize.sync();
};

module.exports = init;
