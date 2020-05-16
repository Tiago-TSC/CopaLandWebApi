const positionService = require('../services/positionService');

exports.add = (req, res, next) => {
  const { position } = req.body;

  positionService
    .add(position)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = (req, res, next) => {
  const { positions } = req.body;

  positionService
    .addMany(positions)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
