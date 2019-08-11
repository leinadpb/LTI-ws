
const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student/student_controller');

router.get('/single', student_controller.getStudents);
router.get('/filtered', student_controller.getHistoryStudentsFiltered);
router.get('/', student_controller.getHistoryStudents);
router.post('/', student_controller.addStudent);
router.get('/current-trimester', student_controller.getStudentInCurrentTrimester);

module.exports = router;