const generationService = require('../services/generationService');

exports.add = (req, res, next) => {
  const { generation } = req.body;

  generationService
    .add(generation)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = (req, res, next) => {
  const { generations } = req.body;

  generationService
    .addMany(generations)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
