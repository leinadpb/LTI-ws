const queries = require('../../db/queries');

const getUser = async (req, res) => {
  let result = await queries.getUser(req.body.intecId, req.body.domain);
  res.status(200).json({ data: result });
}

module.exports = {
  getUser
}