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
  Region.hasMany(State, { foreignKey: { allowNull: false } });
  State.hasMany(City, { foreignKey: { allowNull: false } });
  City.belongsToMany(Player, {
    through: Association,
    foreignKey: { name: 'cityId', allowNull: false },
  });
  Player.belongsToMany(City, {
    through: Association,
    foreignKey: { name: 'playerId', allowNull: false },
  });
  Edition.hasOne(Association, { as: 'initialEditionId' });
  Edition.hasOne(Association, { as: 'finalEditionId' });
  Generation.hasMany(Edition, { foreignKey: { allowNull: false } });
  Player.hasMany(Position, { foreignKey: { allowNull: false } });
  Edition.hasMany(Position, { foreignKey: { allowNull: false } });
  Point.hasMany(Position, { foreignKey: { allowNull: false } });
  sequelize.sync();
};

module.exports = init;
