const queries = require('../../db/queries.js');

const getTrimesters = async (req, res) => {
  let result = await queries.getTrimesters();
  res.status(200).json({ data: result })
}

const updateTrimester = async (req, res) => {
  let result = await queries.updateTrimester(req.body.trimester);
  res.status(200).json({ data: result });
}

const addTrimester = async (req, res) => {
  let result = await queries.addTrimester(req.body.trimester);
  res.status(200).json({ data: result });
}

const getCurrentTrimester = async (req, res) => {
  let result = await queries.getCurrentTrimester();
  res.status(200).json({ data: result });
}

module.exports = {
  getTrimesters,
  updateTrimester,
  addTrimester,
  getCurrentTrimester
}