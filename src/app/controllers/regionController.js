const regionService = require('../services/regionService');

exports.add = async (req, res) => {
  const { region } = req.body;

  await regionService.add(region);

  res.sendStatus(201);
};

exports.addMany = async (req, res) => {
  const { regions } = req.body;

  await regionService.addMany(regions);

  res.sendStatus(201);
};
