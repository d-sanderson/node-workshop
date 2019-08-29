// TODO: user app.params to find the lion using the id
// and then attach the lion to the req object and call next. Then in
// '/lion/:id' just send back req.lion

// create a middleware function to catch and handle errors, register it
// as the last middleware on app


// create a route middleware for POST /lions that will increment and
// add an id to the incoming new lion object on req.body

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const morgan = require('morgan');

let lions = [];
let id = 0;

const updateId = function(req, res, next) {
  if(!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
  // fill this out. this is the route middleware for the ids
};

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.param('id', function(req, res, next, id) {
  // fill this out to find the lion based off the id
  let lion = _.find(lions, {id: id});
  // and attach it to req.lion. Rember to call next()
  if(lion) {
    req.lion = lion;
    next();
  }
  else {
    //ends the request response cycle but you should put error status codes here
    res.send();
    // next(new Error(''))
  }

});

app.get('/lions', function(req, res){
  res.json(lions);
});

app.get('/lions/:id', function(req, res){
  // use req.lion
  let lion = req.lion;
  res.json(lion || {});
});

app.post('/lions', updateId, function(req, res) {
  let lion = req.body;

  lions.push(lion);

  res.json(lion);
});


app.put('/lions/:id', function(req, res) {
  let update = req.body;
  if (update.id) {
    delete update.id
  }

  let lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  } else {
    let updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});


app.use(function(err, res, req, next ) {
  if(err) {
    res.status(500).send(err)

  }
});
app.listen(3000);
console.log('on port 3000');
