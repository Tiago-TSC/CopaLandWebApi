const express = require('express');

const rankingController = require('../controllers/rankingController');

const router = express.Router();

router.get('/Ranking/Main', rankingController.getMain);
router.get('/Ranking/Historical', rankingController.getHistorical);
router.get('/Ranking/YearRange/:firstYear/:lastYear', rankingController.getYearRange);
router.get('/Ranking/EditionRange/:firstEdition/:lastEdition', rankingController.getEditionRange);
router.get('/Ranking/Generation/:generationId', rankingController.getGeneration);

module.exports = router;
