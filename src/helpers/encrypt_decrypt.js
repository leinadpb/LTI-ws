const crypto = require('crypto');
require('dotenv').config();

const KEY = process.env.API_KEY;
const CLIENT_KEY = process.env.CLIENT_KEY;

const ALGORITHM = 'aes-256-cbc';

const encrypt = text => {
  var cipher = crypto.createCipher(ALGORITHM, KEY);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = text => {
  var decipher = crypto.createDecipher(ALGORITHM, KEY);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

// var hw = encrypt(CLIENT_KEY);
// console.log(hw);
// console.log('----');
// console.log(decrypt(hw));

module.exports = {
  encrypt,
  decrypt
};
