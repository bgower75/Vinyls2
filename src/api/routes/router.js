
// eslint-disable-next-line no-undef
const express = require('express')
const Router = express.Router
const router = new Router()

router.use((req, res, next) => {
    console.log("We're on the routers page")
    next()
})

// eslint-disable-next-line no-undef
router.use('/vinyls', require('../controller/vinylController'))
// eslint-disable-next-line no-undef
module.exports = router