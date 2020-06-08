const express = require('express');

const rankingController = require('../controllers/rankingController');

const router = express.Router();

router.get('/Ranking', rankingController.get);

module.exports = router;
