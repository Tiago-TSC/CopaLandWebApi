const cityService = require('../services/cityService');
const sendError = require('../services/errorService');

exports.add = async (req, res) => {
  try {
    const { city } = req.body;

    await cityService.add(city);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};

exports.addMany = async (req, res) => {
  try {
    const { cities } = req.body;

    await cityService.addMany(cities);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};
