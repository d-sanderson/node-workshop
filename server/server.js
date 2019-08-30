var express = require('express');
var app = express();
//this is the router
var api = require('./api/api');
const err = require('./middleware/err');
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling
app.use(err);
// export the app for testing
module.exports = app;
