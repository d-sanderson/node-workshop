var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./userController');


router.param('id', controller.params);

router.route('/')
  .get(controller.get) //  authenticate this
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put) //  authenticate this and ensure its the owner user
  .delete(controller.delete)  //  authenticate this and ensure its the owner user

module.exports = router;
