const express = require('express');
const bodyParser = require('body-parser');

// Routers imports
const StudentRouter = require('./routes/student_router');
const ConfigRouter = require('./routes/config_router');
const RuleRouter = require('./routes/rule_router');

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

let appPort = !!process.env.PORT ? process.env.PORT : 8700;
app.listen(appPort, () =>
  console.log(`App started at port: ${appPort}`)
);