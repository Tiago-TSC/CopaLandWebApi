const express = require('express');

const cityController = require('../controllers/cityController');

const router = express.Router();

router.post('/City', cityController.add);
router.post('/Cities', cityController.addMany);

module.exports = router;
