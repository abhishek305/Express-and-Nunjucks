/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();
// var axios = require('axios');
let path = require('path')


router.get('/', function(req, res, next){
    res.render('pages/home.html',{home:{
        heading:"Hello okaydexter express page",
        img : "https://images.unsplash.com/photo-1545879456-d3f920f7c42a?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    }})});

module.exports = router;