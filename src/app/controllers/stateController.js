const stateService = require('../services/stateService');

exports.add = async (req, res, next) => {
  const { state } = req.body;

  stateService
    .add(state)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { states } = req.body;

  stateService
    .addMany(states)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
