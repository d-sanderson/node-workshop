// TODO: create a basic server with express
const express = require('express');
const app = express();


let jsonData = {count: 12, message: 'hey'};

// that will send back the index.html file on a GET request to '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// it should then send back jsonData on a GET to /data
app.get('/data', (req, res) => {
  res.json(jsonData);
});

app.listen(3000, () => console.log('SERVER UP!!'));
