const stateService = require('../services/stateService');
const sendError = require('../services/errorService');

exports.add = async (req, res) => {
  try {
    const { state } = req.body;

    await stateService.add(state);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};

exports.addMany = async (req, res) => {
  try {
    const { states } = req.body;

    await stateService.addMany(states);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};
