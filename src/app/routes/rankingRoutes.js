const express = require('express');

const rankingController = require('../controllers/rankingController');

const router = express.Router();

router.get('/Ranking/Main', rankingController.getMain);
router.get('/Ranking/Historical', rankingController.getHistorical);
router.get('/Ranking/YearRange/:firstYear/:lastYear', rankingController.getHistorical);
router.get('/Ranking/EditionRange/:firstEdition/:lastEdition', rankingController.getHistorical);
router.get('/Ranking/Generation/:generationId', rankingController.getGeneration);
router.get('/Ranking/Region', rankingController.getRegion);
router.get('/Ranking/Region/YearRange/:firstYear/:lastYear', rankingController.getRegion);
router.get('/Ranking/Region/EditionRange/:firstEdition/:lastEdition', rankingController.getRegion);
router.get('/Ranking/State', rankingController.getState);
router.get('/Ranking/State/YearRange/:firstYear/:lastYear', rankingController.getState);
router.get('/Ranking/State/EditionRange/:firstEdition/:lastEdition', rankingController.getState);
router.get('/Ranking/City', rankingController.getCity);
router.get('/Ranking/City/YearRange/:firstYear/:lastYear', rankingController.getCity);
router.get('/Ranking/City/EditionRange/:firstEdition/:lastEdition', rankingController.getCity);

module.exports = router;
