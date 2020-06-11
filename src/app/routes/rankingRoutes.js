const express = require('express');

const rankingController = require('../controllers/rankingController');

const router = express.Router();

router.get('/Ranking/Historical', rankingController.getHistorical);
router.get('/Ranking/YearRange/:firstYear/:lastYear', rankingController.getYearRange);
router.get('/Ranking/EditionRange/:firstEdition/:lastEdition', rankingController.getEditionRange);

module.exports = router;
