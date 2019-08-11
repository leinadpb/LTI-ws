const queries = require('../../db/queries');

const getUser = async (req, res) => {
  let result = await queries.getUser(req.query.intecId, req.query.domain);
  res.status(200).json({ data: result });
}

module.exports = {
  getUser
}