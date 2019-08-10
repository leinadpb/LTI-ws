
const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student/student_controller');

router.get('/', student_controller.getStudents);
router.post('/', student_controller.addStudent);
router.get('/current-trimester', student_controller.getStudentInCurrentTrimester);

module.exports = router;