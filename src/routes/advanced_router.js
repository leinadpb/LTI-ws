
const express = require('express');
const router = express.Router();
const advanced_controller = require('../controllers/advanced/advanced_controller.js');

router.get('/upd-signatures', advanced_controller.updateSignatures);

module.exports = router;