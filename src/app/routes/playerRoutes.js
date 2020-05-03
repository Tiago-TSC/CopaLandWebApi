const express = require('express');

const playerController = require('../controllers/playerController');

const router = express.Router();

router.post('/Player', playerController.add);
router.post('/Players', playerController.addMany);

module.exports = router;
