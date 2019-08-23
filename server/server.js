// TODO: make this work.
// if you go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can access data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [

];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

//  create
app.post('/lions', (req, res) => {
  let lion = req.body;
  id++;
  lion.id = id + '';
  lions.push(lion)
  res.json(lion)
});

//  read
app.get('/lions', (req, res) => {
res.json(lions);

});

app.get('/lions/:id', (req, res) => {
let lion = _.find(lions, {id: req.params.id});
res.json(lion || {});

});
// //  update
app.put('/update/:id', (req, res) => {


});
// //  destroy
app.delete('/delete', (req, res) => {


});
app.listen(3000);
console.log('on port 3000');
