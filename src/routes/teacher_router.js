
const express = require('express');
const router = express.Router();
const teacher_controller = require('../controllers/teacher/teacher_controller');

router.get('/single', teacher_controller.getTeachers);
router.post('/', teacher_controller.addTeacher);
router.get('/current-trimester', teacher_controller.getTeacherInCurrentTrimester);

module.exports = router;