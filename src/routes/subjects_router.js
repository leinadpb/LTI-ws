
const express = require('express');
const router = express.Router();
const subject_controller = require('../controllers/subject/subject_controller');

router.get('/', subject_controller.getSubjects);
router.post('/', subject_controller.addSubjects);
router.delete('/', subject_controller.removeAllSubjects);

module.exports = router;