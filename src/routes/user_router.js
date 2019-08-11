const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user/user_controller');
const common_controller = require('../controllers/common/common_controller');

router.get('/', user_controller.getUser);
router.get('/app-user', common_controller.getAppUser);

module.exports = router;
