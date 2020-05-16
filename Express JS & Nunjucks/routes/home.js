/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();
// var axios = require('axios');
let path = require('path')


router.get('/', function(req, res, next){
    res.sendFile('/home/abhishek/Desktop/video/express video/views/home.html')
});

module.exports = router;