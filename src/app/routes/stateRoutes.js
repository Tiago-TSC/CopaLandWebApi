const express = require('express');

const stateController = require('../controllers/stateController');

const router = express.Router();

router.post('/State', stateController.add);
router.post('/States', stateController.addMany);

module.exports = router;
