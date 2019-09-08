var express = require('express');
var app = express();
var api = require('./api/api');
var dotenv = require('dotenv');
dotenv.config();

// db.url is different depending on NODE_ENV
require('mongoose').connect(process.env.DB_URI, { useNewUrlParser: true });

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
