/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();
// var axios = require('axios');


router.get('/', function(req, res, next){
    res.sendFile('/home/abhishek/Desktop/video/express video/views/about.html')
});

module.exports = router;