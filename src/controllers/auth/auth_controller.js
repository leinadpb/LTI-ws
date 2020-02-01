const User = require('../../models/app_user');
const jwt = require('jsonwebtoken');
const helperSignatures = require('../../helpers/signatures');
require('dotenv').config();

const CLIENT_KEY_1 = process.env.CLIENT_KEY_1;
const CLIENT_KEY_2 = process.env.CLIENT_KEY_2;
const CLIENT_KEY_3 = process.env.CLIENT_KEY_3;
const CLIENT_KEY_4 = process.env.CLIENT_KEY_4;
const CLIENT_KEY_5 = process.env.CLIENT_KEY_5;

const signUp = (req, res) => {
  const user = new User({ email: req.body.email, password: req.body.password, first: req.body.first });
  user.save(err => {
    console.log(err);
    if (err) {
      return res.status(500).json({ message: "Couldn't save the specified user" });
    }
    return res.status(200).json({
      user: User.findOne({ email: req.body.email }).exec()
    });
  });
};

const signIn = (req, res) => {
  let clientSecret = req.body.secret;

  return res.status(200).json({ message: 'Login successfull!', token: undefined });
};

module.exports = {
  signUp,
  signIn
};
