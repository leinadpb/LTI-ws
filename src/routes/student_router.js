
const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student/student_controller');

router.get('/single', student_controller.getStudents);
router.post('/filtered', student_controller.getHistoryStudentsFiltered);
router.get('/', student_controller.getHistoryStudents);
router.post('/', student_controller.addStudent);
router.post('/current-trimester', student_controller.getStudentInCurrentTrimester);

module.exports = router;