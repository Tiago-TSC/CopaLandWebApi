const express = require('express');

const positionController = require('../controllers/positionController');

const router = express.Router();

router.post('/Position', positionController.add);
router.post('/Positions', positionController.addMany);

module.exports = router;
