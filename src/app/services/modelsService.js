const sequelize = require('./dataBaseService');
const Region = require('../models/Region');
const State = require('../models/State');
const City = require('../models/City');
const Association = require('../models/Association');
const Player = require('../models/Player');
const Edition = require('../models/Edition');
const Generation = require('../models/Generation');
const Position = require('../models/Position');
const Point = require('../models/Point');

const init = async () => {
  Region.hasMany(State);
  State.hasMany(City);
  City.belongsToMany(Player, {
    through: Association,
    foreignKey: { name: 'cityId' },
  });
  Player.belongsToMany(City, {
    through: Association,
    foreignKey: { name: 'playerId' },
  });
  Edition.hasOne(Association, { as: 'initialEditionId' });
  Edition.hasOne(Association, { as: 'finalEditionId' });
  Generation.hasMany(Edition);
  Player.hasMany(Position, { foreignKey: { allowNull: false } });
  Edition.hasMany(Position, { foreignKey: { allowNull: false } });
  Point.hasMany(Position, { foreignKey: { allowNull: false } });
  sequelize.sync();
};

module.exports = init;
