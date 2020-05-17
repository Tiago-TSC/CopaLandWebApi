const express = require('express');

const classificationController = require('../controllers/classificationController');

const router = express.Router();

router.post('/Classification', classificationController.add);
router.post('/Classifications', classificationController.addMany);

module.exports = router;
