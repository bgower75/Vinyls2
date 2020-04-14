const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27015/vinyls', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/api', require('./routes/router'));
    console.log("We've reached the database");
})
.catch((err) => {
    console.log(`The error is ${err}`);
});

module.exports = app;