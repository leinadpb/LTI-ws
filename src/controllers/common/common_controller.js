const queries = require('../../db/queries.js');

const updateSurveyStatus = async (req, res) => {
  let result = await queries.updateSurveyStatus(req.user, req.value);
  res.status(200).json({ data: result });
}

const getUser = async (req, res) => {
  let result = await queries.getUser(req.intecId, req.domain);
  res.status(200).json({ data: result });
}

module.exports = {
  updateSurveyStatus,
  getUser,
}