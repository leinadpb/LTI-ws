
const SubjectScript = require('../../helpers/subject_scrab.js');

require('dotenv').config();

const updateSignatures = async (req, res) => {

  await SubjectScript.start();
  res.status(200).json({success: true});

  // if (!!req.query.key) {
  //   if(process.env.SECRET_KEY === req.query.key) {
      
  //   } else {
  //     // Sorry, you're not allowed
  //     res.status(401).json({ data: {
  //       success: false
  //     }});
  //     res.send('Sorry, you\'re not allowed to execute this script.').json({ data: {
  //       success: false
  //     }});
  //   }
  // } else {
  //   // Bad request, please provide the authorization key
  //   res.status(400).json({ data: {
  //     success: false
  //   }});
  //   res.send('Please, provide the authorization key');
  // }
  // res.status(200).json({ data: result });
}


module.exports = {
  updateSignatures,
}