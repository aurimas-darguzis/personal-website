'use strict';

const port = process.env.PORT || 3030;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const mongo = require('./server/db/mongo');

app.use(bodyParser.json({limit: '10mg'}));
app.use(bodyParser.urlencoded({exntended: true, limit: '10mb'}));
app.use('/', express.static(__dirname + '/dist'));
app.use('/home', express.static(__dirname + '/home'));
app.use('/tmp', express.static.use(__dirname + '/tmp'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

// Load APIs
require('./server/api/API')(app);
app.use(function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

mongo.connect()
  .catch(err => console.log('Mongo connection error', err));
  
  console.log('Listening on port ' + port + '...');
  console.log('environment: ' + env);

  app.listen(port);


