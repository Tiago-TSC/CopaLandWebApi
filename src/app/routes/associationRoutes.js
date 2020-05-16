const express = require('express');

const associationController = require('../controllers/associationController');

const router = express.Router();

router.post('/Association', associationController.add);
router.post('/Associations', associationController.addMany);

module.exports = router;
