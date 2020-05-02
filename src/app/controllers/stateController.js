const stateService = require('../services/stateService');

exports.add = async (req, res) => {
  const { state } = req.body;

  await stateService.add(state);

  res.sendStatus(201);
};

exports.addMany = async (req, res) => {
  const { states } = req.body;

  await stateService.addMany(states);

  res.sendStatus(201);
};
