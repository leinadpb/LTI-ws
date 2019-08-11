
const express = require('express');
const router = express.Router();
const trimester_controller = require('../controllers/trimester/trimester_controller');

router.get('/', trimester_controller.getTrimesters);
router.get('/current', trimester_controller.getCurrentTrimester);
router.post('/', trimester_controller.addTrimester);
router.put('/', trimester_controller.updateTrimester);

module.exports = router;