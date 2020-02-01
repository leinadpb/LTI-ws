const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const helperSignatures = require('./helpers/signatures');
const helperDecrypt = require('./helpers/encrypt_decrypt');
// Routers imports
const StudentRouter = require('./routes/student_router.js');
const ConfigRouter = require('./routes/config_router.js');
const RuleRouter = require('./routes/rule_router.js');
const TrimesterRouter = require('./routes/trimester_router.js');
const TeacherRouter = require('./routes/teacher_router.js');
const BlacklistRotuer = require('./routes/blacklist_router.js');
const SubjectRouter = require('./routes/subjects_router.js');
const UserRouter = require('./routes/user_router.js');
const AuthRouter = require('./routes/auth_router.js');
const CommonRouter = require('./routes/common_router.js');
const AdvancedRouter = require('./routes/advanced_router.js');

// INFO:
// All clients trying to connect to this service must provide the CLIENT_KEY in the Bearer token athorization header for each request.

const app = express();
require('dotenv').config();

// connect to DB
require('./helpers/connect_db.js');
// Seed data if needed
require('./db/seed.js');

// constants
const PUBLIC_ROUTES = ['/api/v1/auth/signin'];

const loginClient = clientKey => {
  // Verify digital signature
  let decryptedClientKey = helperDecrypt.decrypt(clientKey);
  let verifyResult = helperSignatures.verify(decryptedClientKey);
  return verifyResult;
};

app.use(require('body-parser').json());
app.use((req, res, next) => {
  console.log(req.path);
  console.log('body: ', req.body);
  console.log('query: ', req.query);
  if (PUBLIC_ROUTES.includes(req.path)) {
    next();
  } else {
    if (req.headers.authorization) {
      try {
        const clientKey = req.headers.authorization.split(' ')[1];

        if (loginClient(clientKey)) {
          // Allow request
          next();
        } else {
          // Deny request
          console.log('Authentication failed. clientKey: ', clientKey);
          return res.status(401).json({ message: 'Login Denied.' });
        }
      } catch (e) {
        return res.status(500).json({ message: 'Unknown error.' });
      }
    } else {
      console.log('Authorization token was not provided.');
      return res.status(401).json({ message: 'Provide an authorization token.' });
    }
  }
});

// Routers - will be all protected
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/students', StudentRouter);
app.use('/api/v1/configs', ConfigRouter);
app.use('/api/v1/rules', RuleRouter);
app.use('/api/v1/trimesters', TrimesterRouter);
app.use('/api/v1/teachers', TeacherRouter);
app.use('/api/v1/blacklist', BlacklistRotuer);
app.use('/api/v1/subjects', SubjectRouter);
app.use('/api/v1/common', CommonRouter);
app.use('/api/v1/advanced', AdvancedRouter);

let appPort = !!process.env.PORT ? process.env.PORT : 8700;
app.listen(appPort, '0.0.0.0', () => console.log(`App started at port: ${appPort}`));
