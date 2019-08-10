const queries = require('../../db/queries.js');

const getRules = async (req, res) => {
  let result = await queries.getRules();
  res.status(200).json({ data: result });
}

const updateRule = async (req, res) => {
  let result = await queries.updateRule(req.rule);
  res.status(200).json({data: result});
}

const deleteRule = async (req, res) => {
  let result = await queries.deleteRule(req.rule);
  res.status(200).json({ data: result });
}

const addRule = async (req, res) => {
  let result = await queries.addRule(req.rule);
  res.status(200).json({ data: result });
}

const updateRuleByText = async (req, res) => {
  let result = await queries.updateRuleByText(req.rule);
  res.status(200).json({ data: result });
}

const updateRulesNumbers = async (req, res) => {
  let result = await queries.updateRulesNumbers(req.rules);
  res.status(200).json({ data: result });
}

module.exports = {
  getRules,
  updateRule,
  deleteRule,
  addRule,
  updateRuleByText,
  updateRulesNumbers,
}