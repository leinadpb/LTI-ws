const queries = require('../../db/queries.js');


const getTeachers = async (req, res) => {
  let result = await queries.getTeachers(req.intecId);
  res.status(200).json({ data: result });
}

const addTeacher = async (req, res) => {
  let result = await queries.addTeacher(req.teacher);
  res.status(200).json({ data: result });
}

const getTeacherInCurrentTrimester = async (req, res) => {
  let result = await queries.getTeacherInCurrentTrimester(req.currentTrimester, req.userName);
  res.status(200).json({ data: result });
}

module.exports = {
  getTeachers,
  getTeacherInCurrentTrimester,
  addTeacher,
}