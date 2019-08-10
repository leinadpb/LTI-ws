const queries = require('../../db/queries.js');

const getStudents = async (req, res) => {
  let result = await queries.getStudents(req.intecId);
  res.status(200).json({ data: result });
}

const addStudent = async (req, res) => {
  let result = await queries.addStudent(req.student);
  res.status(200).json({ data: result });
}

const getStudentInCurrentTrimester = async (req, res) => {
  let result = await queries.getStudentInCurrentTrimester(req.currentTrimester, req.userName);
  res.status(200).json({ data: result });
}

module.exports = {
  getStudents,
  addStudent,
  getStudentInCurrentTrimester
}