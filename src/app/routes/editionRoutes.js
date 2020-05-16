const express = require('express');

const editionController = require('../controllers/editionController');

const router = express.Router();

router.post('/Edition', editionController.add);
router.post('/Editions', editionController.addMany);

module.exports = router;
