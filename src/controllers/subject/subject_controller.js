const queries = require('../../db/queries.js');

const getSubjects = async (req, res) => {
  let result = await queries.getSubjects();
  res.status(200).json({ data: result });
}

const addSubjects = async (req, res) => {
  let result = await queries.addSubjects(req.subjects);
  res.status(200).json({ data: result });
}

const removeAllSubjects = async (req, res) => {
  let result = await queries.removeAllSubjects();
  res.status(200).json({ data: result });
}

module.exports = {
  getSubjects,
  addSubjects,
  removeAllSubjects
}