const classificationService = require('../services/classificationService');

exports.add = async (req, res, next) => {
  const { classification } = req.body;

  classificationService
    .add(classification)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};

exports.addMany = async (req, res, next) => {
  const { classifications } = req.body;

  classificationService
    .addMany(classifications)
    .then(() => res.sendStatus(201))
    .catch(err => next(err));
};
