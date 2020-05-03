const playerService = require('../services/playerService');
const sendError = require('../services/errorService');

exports.add = async (req, res) => {
  try {
    const { player } = req.body;

    await playerService.add(player);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};

exports.addMany = async (req, res) => {
  try {
    const { players } = req.body;

    await playerService.addMany(players);

    res.sendStatus(201);
  } catch (err) {
    sendError(res, err);
  }
};
