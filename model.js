// strict mode
'use strict';

// Load required packages
const mongoose = require('mongoose');

// address schema
const addressModel = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
});

// customer schema
const customerModel = new mongoose.Schema({
    name: { type: String, required: true },
    hair: { type: String, enum: ['blonde', 'brunette', 'red', 'black', 'gray', 'bald'], required: true },
    age: { type: Number },
    address: [addressModel]
});

// orders schema
const ordersModel = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
    date: { type: Date, default: Date.now },
    products: [{ type: String }],
});

const Customers = mongoose.model('customers', customerModel);
const Orders = mongoose.model('orders', ordersModel);

module.exports = {
    Customers, Orders
    // here we can add more models if we need, and we can name them as we want
    // for example: MyCustomers: Customers
};
