const playerService = require('../services/playerService');

exports.add = async (req, res, next) => {
  const { player } = req.body;

  playerService
    .add(player)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { players } = req.body;

  playerService
    .addMany(players)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.get = async (req, res, next) => {
  playerService
    .get()
    .then(players => res.send(players))
    .catch(err => next(err));
};
