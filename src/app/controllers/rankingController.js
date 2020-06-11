const rankingService = require('../services/rankingService');

exports.getHistorical = (req, res, next) => {
  rankingService
    .get({})
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getYearRange = (req, res, next) => {
  const { firstYear, lastYear } = req.params;

  rankingService
    .get({ firstYear, lastYear })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getEditionRange = (req, res, next) => {
  const { firstEdition, lastEdition } = req.params;

  rankingService
    .get({ firstEdition, lastEdition })
    .then(result => res.send(result))
    .catch(err => next(err));
};
