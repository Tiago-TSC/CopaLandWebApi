const rankingService = require('../services/rankingService');

const RankingType = require('../constants/RankingType');

exports.getMain = (req, res, next) => {
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ main: true, excel, rankingType: RankingType.player })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getHistorical = (req, res, next) => {
  const { firstYear, lastYear, firstEdition, lastEdition } = req.params;
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ excel, rankingType: RankingType.player, firstYear, lastYear, firstEdition, lastEdition })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getGeneration = (req, res, next) => {
  const { generationId } = req.params;
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ excel, rankingType: RankingType.player, generationId })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getRegion = (req, res, next) => {
  const { firstYear, lastYear, firstEdition, lastEdition } = req.params;
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ excel, rankingType: RankingType.region, firstYear, lastYear, firstEdition, lastEdition })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getState = (req, res, next) => {
  const { firstYear, lastYear, firstEdition, lastEdition } = req.params;
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ excel, rankingType: RankingType.state, firstYear, lastYear, firstEdition, lastEdition })
    .then(result => res.send(result))
    .catch(err => next(err));
};

exports.getCity = (req, res, next) => {
  const { firstYear, lastYear, firstEdition, lastEdition } = req.params;
  const excel = req.query.excel == 1 ? true : false;

  rankingService
    .get({ excel, rankingType: RankingType.city, firstYear, lastYear, firstEdition, lastEdition })
    .then(result => res.send(result))
    .catch(err => next(err));
};
