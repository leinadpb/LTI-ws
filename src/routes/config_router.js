
const express = require('express');
const router = express.Router();
const config_controller = require('../controllers/config/config_controller');

router.get('/', config_controller.getConfigs);
router.post('/', config_controller.updateConfig);
router.post('/preferences', config_controller.updatePreferences);

module.exports = router;