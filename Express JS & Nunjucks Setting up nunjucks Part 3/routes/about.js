/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();
// var axios = require('axios');



router.get('/', function(req, res, next){
    res.render('pages/about.html',{about:{
        heading:"Hello welcome to about page",
        img : "https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    }})
});

module.exports = router;