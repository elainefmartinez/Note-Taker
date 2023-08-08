const express = require('express');

const apiRouter = require('./api');

const router = express();

router.use('/', apiRouter);

module.exports = router;
