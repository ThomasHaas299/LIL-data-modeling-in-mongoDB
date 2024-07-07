// strict mode
'use strict';

// Load required packages
const mongoose = require('mongoose');

// Models (customer and orders from model.js)
const { Customers, Orders } = require('./model');

// connect to the database
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true }).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database', err);
});
