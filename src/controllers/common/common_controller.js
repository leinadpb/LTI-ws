const queries = require('../../db/queries.js');

const updateSurveyStatus = async (req, res) => {
  let result = await queries.updateSurveyStatus(req.body.user, req.body.value);
  res.status(200).json({ data: result });
}

const getUser = async (req, res) => {
  let result = await queries.getUser(req.query.intecId, req.query.domain);
  res.status(200).json({ data: result });
}

const getAppUser = async (req, res) => {
  let result = await queries.getAppUser(req.query.email);
  res.status(200).json({ data: result });
}

module.exports = {
  updateSurveyStatus,
  getUser,
  getAppUser,
}