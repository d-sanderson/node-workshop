const mongoose = require('mongoose');
let dotenv = require('dotenv');
dotenv.config();
// connect to a database so the below will work.
// what's happening is that we're createing a new schema
// and making a todos collection and a Todo model.
// We then create new Todo.
// So in the mongo shell in the terminal,
// connect to your database and uery it there
// and see if you see the todo below log in the terminal
// run node db.Tester to execute this file
// MAKE SURE MONGOD is RUNNING
const db_uri = process.env.DB_URI || 'nope'

mongoose.connect(db_uri, {useNewUrlParser: true})

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var Todo = mongoose.model('todo', TodoSchema);
Todo.create({
  name: 'clean up your room!!!',
  completed: false
}).then(function(err, todo) {
  console.log(err, todo);
});
