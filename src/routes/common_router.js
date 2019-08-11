
const express = require('express');
const router = express.Router();
const common_controller = require('../controllers/common/common_controller');

router.post('/survey-status', common_controller.updateSurveyStatus);
router.get('/user', common_controller.getUser);

module.exports = router;