const queries = require('../../db/queries.js');

const getHistoryStudents = async (req, res) => {
  let result = await queries.getHistoryStudents();
  res.status(200).json({ data: result });
}

const getHistoryStudentsFiltered = async (req, res) => {
  let result = await queries.getHistoryStudentsFiltered(req.body.filterObj);
  res.status(200).json({ data: result });
}

const getStudents = async (req, res) => {
  let result = await queries.getStudents(req.query.intecId);
  res.status(200).json({ data: result });
}

const addStudent = async (req, res) => {
  let result = await queries.addStudent(req.body.student);
  res.status(200).json({ data: result });
}

const getStudentInCurrentTrimester = async (req, res) => {
  let result = await queries.getStudentInCurrentTrimester(req.body.currentTrimester, req.body.userName);
  res.status(200).json({ data: result });
}

module.exports = {
  getStudents,
  addStudent,
  getStudentInCurrentTrimester,
  getHistoryStudents,
  getHistoryStudentsFiltered
}