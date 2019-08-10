
const express = require('express');
const router = express.Router();
const rule_controller = require('../controllers/rule/rule_controller');

router.get('/', rule_controller.getRules);
router.post('/', rule_controller.updateRule);
router.delete('/', rule_controller.deleteRule);
router.post('/', rule_controller.addRule);
router.post('/update-by-text', rule_controller.updateRuleByText);
router.post('/update-numbers', rule_controller.updateRulesNumbers);

module.exports = router;