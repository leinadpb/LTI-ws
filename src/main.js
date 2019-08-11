const express = require('express');
const bodyParser = require('body-parser');

// Routers imports
const StudentRouter = require('./routes/student_router');
const ConfigRouter = require('./routes/config_router');
const RuleRouter = require('./routes/rule_router');
const TrimesterRouter = require('./routes/trimester_router');
const TeacherRouter = require('./routes/teacher_router');
const BlacklistRotuer = require('./routes/blacklist_router');
const SubjectRouter = require('./routes/subjects_router');

const app  = express();
require('dotenv').config();

// connect to DB
require('./helpers/connect_db');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Routers
app.use('/api/v1/students', StudentRouter);
app.use('/api/v1/configs', ConfigRouter);
app.use('/api/v1/rules', RuleRouter);
app.use('/api/v1/trimesters', TrimesterRouter);
app.use('/api/v1/teachers', TeacherRouter);
app.use('/api/v1/blacklist', BlacklistRotuer);
app.use('/api/v1/subjects', SubjectRouter);

let appPort = !!process.env.PORT ? process.env.PORT : 8700;
app.listen(appPort, () =>
  console.log(`App started at port: ${appPort}`)
);