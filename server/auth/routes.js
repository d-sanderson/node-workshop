let router = require('express').Router();
let controller = require('./controller');
let verifyUser = require('./auth').verifyUser;
// before we send back a jwt, lets check
// the password and username match what is in the DB
router.post('/signin', verifyUser(), controller.signin);

module.exports = router;
