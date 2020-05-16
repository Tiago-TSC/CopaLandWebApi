const associationService = require('../services/associationService');

exports.add = async (req, res, next) => {
  const { association } = req.body;

  associationService
    .add(association)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { associations } = req.body;

  associationService
    .addMany(associations)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
