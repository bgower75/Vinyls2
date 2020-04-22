const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const logger = require('../utils/logger');
const config = require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/api', require('./routes/router'));
    logger.info("We've reached the database");
})
.catch((err) => {
    logger.error(`The error is ${err}`);
});

module.exports = app;