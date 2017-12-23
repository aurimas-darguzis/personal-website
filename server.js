'use strict';

const port = process.env.PORT || 3030;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const mongo = require('./server/db/mongo');

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit:' 10mb'}));
app.use('/home', express.static(__dirname + '/home'));
app.use('/temp', express.static(__dirname + '/tmp'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Method', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Load APIs
require('./server/api/API')(app)
app.use(function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

mongo.connect() 
  .catch(err => console.log('Mongo connection error', err));

console.log('Listening on port ' + port + '...');
console.log('environment: ' + env)

app.listen(port);

// Load sockets
// require('./server/utils/socket')(server);