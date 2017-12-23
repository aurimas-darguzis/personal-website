'use strict';

const port = process.env.PORT || 3030;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const mongo = require('./server/db/mongo');

