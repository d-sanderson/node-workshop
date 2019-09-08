var router = require('express').Router();
var logger = require('../../util/logger');
const controller = require('./postController');
// setup boilerplate route jsut to satisfy a request
// for building
const createRoutes = require('../../util/createRoutes')
createRoutes(controller, router)

module.exports = router;
