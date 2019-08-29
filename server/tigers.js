// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server
const _ = require('lodash');
const tigerRouter = require('express').Router();

const tigers = [
  {
    name: "fadsfasdf",
    pride: "sdafa",
    age: "23432",
    gender: "female",
    id: "1"
    }
];
let id = 0;

let updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

tigerRouter.param('id', function(req, res, next, id) {
  let todo = _.find(todos, {id: id});

  if (todo) {
    req.todo = todo;
    next();
  } else {
    res.send();
  }
});

tigerRouter.route('/')
  .get((req, res) =>{
    res.json(tigers);
  })
  .post(updateId, (req, res) => {
    let tiger = req.body;
    tigers.push(tiger);
    res.json(tiger);
  });

  tigerRouter.route('/:id')
    .get((req, res) => {
      let tiger = req.todo;
      res.json(tiger || {});
    })
    .delete((req,res) => {
      let tiger = _.findIndex(tigers, {id: req.params.id});
      tigers.splice(tiger, 1);
      res.json(req.tiger);
    })
    .put((req, res) => {
      let update = req.body;
  if (update.id) {
    delete update.id
  }
  let tiger = _.findIndex(tigers, {id: req.params.id});
  if (!tigers[tiger]) {
    res.send();
  } else {
    let updatedTiger = _.assign(tigers[tiger], update);
    res.json(updatedTiger);
  }
    });


module.exports = tigerRouter;
