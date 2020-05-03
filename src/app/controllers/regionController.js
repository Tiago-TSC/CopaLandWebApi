const regionService = require('../services/regionService');
const sendError = require('../services/errorService');

exports.add = async (req, res) => {
  try {
    const { region } = req.body;

    await regionService.add(region);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};

exports.addMany = async (req, res) => {
  try {
    const { regions } = req.body;

    await regionService.addMany(regions);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};
