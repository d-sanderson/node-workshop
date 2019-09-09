var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./categoryController');

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post) //  authenticate this

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put) //  authenticate this
  .delete(controller.delete) //  authenticate this

module.exports = router;
