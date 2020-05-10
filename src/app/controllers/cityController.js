const cityService = require('../services/cityService');

exports.add = async (req, res, next) => {
  const { city } = req.body;

  cityService
    .add(city)
    .then(result => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { cities } = req.body;

  cityService
    .addMany(cities)
    .then(result => res.sendStatus(201))
    .catch(err => next(err));
};
