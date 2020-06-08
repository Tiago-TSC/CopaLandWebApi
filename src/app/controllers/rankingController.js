const rankingService = require('../services/rankingService');

exports.get = (req, res, next) => {
  rankingService
    .get()
    .then(result => res.send(result))
    .catch(err => next(err));
};
