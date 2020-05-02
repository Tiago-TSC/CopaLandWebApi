const express = require('express');

const regionController = require('../controllers/regionController');

const router = express.Router();

router.post('/Region', regionController.add);
router.post('/Regions', regionController.addMany);

module.exports = router;
