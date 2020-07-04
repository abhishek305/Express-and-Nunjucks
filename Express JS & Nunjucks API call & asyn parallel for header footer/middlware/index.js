/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();

router.get('*', require('./partials'));

module.exports = router;