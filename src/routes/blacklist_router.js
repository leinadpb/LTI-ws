
const express = require('express');
const router = express.Router();
const blacklist_controller = require('../controllers/black-list/blacklist_controller');

router.get('/', blacklist_controller.getBlackListUsers);
router.post('/', blacklist_controller.addBlackListUser);
router.delete('/', blacklist_controller.deleteBlackListUser);
router.put('/', blacklist_controller.updateBlackListUser);

module.exports = router;