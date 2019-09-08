var router = require('express').Router();
var logger = require('../../util/logger');
const postController = require('./postController');
// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from post!!');
    res.send({ok: true});
  });
router.post('/create', postController.put)
  router.get('/posts', postController.get);

module.exports = router;
