const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// models
const UserModel = require('./models/app_user.js');

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

const app  = express();
require('dotenv').config();

// connect to DB
require('./helpers/connect_db.js');
// Seed data if needed
require('./db/seed.js');

// constants
const PUBLIC_ROUTES = ['/api/v1/auth/signin'];

app.use(require('body-parser').json());
app.use((req, res, next) => {
  console.log('DEBUG >>>> ', req.path);
  console.log('DEBUG >>> ', req.body);
  console.log('DEBUG >>> ', req.query);
  console.log('BEDUB >>> auth token >>> ', req.headers.authorization);
  if (PUBLIC_ROUTES.includes(req.path)) {
    next();
  } else {
    if (req.headers.authorization) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        if (!!token) {
          jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
              return res.status(401).json({message: "Invalid signature. Please log in again or verify your access token."})
            }
            if (!!payload) {
              UserModel.findById(payload.userId).then(doc => {
                req.user = doc;
                next();
              });
            } else {
              next();
            }
          })
        } else {
          return res.status(401).json({message: "Please, provide your authorization token."})
        }
      } catch(e) {
        return res.status(401).json({message: "Our fault, we couldn't validate your token."})
      }
    } else {
      return res.status(401).json({message: "You need to sign in before continue."})
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

let appPort = !!process.env.PORT ? process.env.PORT : 8700;
app.listen(appPort, () =>
  console.log(`App started at port: ${appPort}`)
);