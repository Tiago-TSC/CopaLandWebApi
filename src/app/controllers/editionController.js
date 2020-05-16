const editionService = require('../services/editionService');

exports.add = async (req, res, next) => {
  const { edition } = req.body;

  editionService
    .add(edition)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { editions } = req.body;

  editionService
    .addMany(editions)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
