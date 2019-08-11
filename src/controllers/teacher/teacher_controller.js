const queries = require('../../db/queries.js');


const getTeachers = async (req, res) => {
  let result = await queries.getTeachers(req.query.intecId);
  res.status(200).json({ data: result });
}

const addTeacher = async (req, res) => {
  let result = await queries.addTeacher(req.body.teacher);
  res.status(200).json({ data: result });
}

const getTeacherInCurrentTrimester = async (req, res) => {
  let result = await queries.getTeacherInCurrentTrimester(req.body.currentTrimester, req.body.userName);
  res.status(200).json({ data: result });
}

module.exports = {
  getTeachers,
  getTeacherInCurrentTrimester,
  addTeacher,
}