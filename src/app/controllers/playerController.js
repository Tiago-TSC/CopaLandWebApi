const playerService = require('../services/playerService');

exports.add = async (req, res, next) => {
  const { player } = req.body;

  playerService
    .add(player)
    .then(result => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { players } = req.body;

  playerService
    .addMany(players)
    .then(result => res.sendStatus(201))
    .catch(err => next(err));
};
