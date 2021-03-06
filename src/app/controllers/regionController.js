const regionService = require('../services/regionService');

exports.add = (req, res, next) => {
  const { region } = req.body;

  regionService
    .add(region)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = (req, res, next) => {
  const { regions } = req.body;

  regionService
    .addMany(regions)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
