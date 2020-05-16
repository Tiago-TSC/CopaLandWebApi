const express = require('express');

const generationController = require('../controllers/generationController');

const router = express.Router();

router.post('/Generation', generationController.add);
router.post('/Generations', generationController.addMany);

module.exports = router;
