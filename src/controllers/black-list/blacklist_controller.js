const queries = require('../../db/queries.js');

const getBlackListUsers = async (req, res) => {
  let result = await queries.getBlackListUsers();
  res.status(200).json({ data: result });
}

const addBlackListUser = async (req, res) => {
  let result = await queries.addBlackListUser(req.body.user);
  res.status(200).json({ data: result });
}

const deleteBlackListUser = async (req, res) => {
  let result = await queries.deleteBlackListUser(req.body.user);
  res.status(200).json({ data: result });
}

const updateBlackListUser = async (req, res) => {
  let result = await queries.updateBlackListUser(req.body.user);
  res.status(200).json({ data: result });
}


module.exports = {
  updateBlackListUser,
  deleteBlackListUser,
  addBlackListUser,
  getBlackListUsers,
}