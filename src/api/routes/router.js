
const express = require('express');
const Router = express.Router;
const router = new Router();

router.use((req, res, next) => {
    console.log("We're on the routers page");
    next();
});

router.use('/vinyls', require('../controller/vinylController'));
module.exports = router;