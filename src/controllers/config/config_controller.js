const queries = require('../../db/queries.js');

const getConfigs = async (req, res) => {
  let result = await queries.getConfigs();
  res.status(200).json({ data: result });
}

const updateConfig = async (req, res) => {
  let result = await queries.updateConfig(req.body.config);
  res.status(200).json({ data: result });
}

const updatePreferences = async (req, res) => {
  let result = await queries.updatePreferences(req.body.preferences);
  res.status(200).json({ data: result });
}

module.exports = {
  getConfigs,
  updateConfig,
  updatePreferences
}