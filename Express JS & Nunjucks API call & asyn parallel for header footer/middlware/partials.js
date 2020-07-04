/**
 * Module dependencies.
 */

let async = require("async");
let axios = require('axios');

module.exports=function (req, res, next){

	async.parallel([
		function(callback){
      axios({
        method: 'get',
        url: `http://demo4621333.mockable.io/header`,
        headers:{"Content-Type":"application/json"}
        
      })
        .then(function (data) {
          callback(null,data.data);
        }).catch((err)=>{
          console.log(err);
        })
    
    },
    function(callback){
      axios({
        method: 'get',
        url: `http://demo4621333.mockable.io/footer`,
        headers:{"Content-Type":"application/json"}

        
      })
        .then(function (data) {
          callback(null,data.data);
        }).catch((err)=>{
          console.log(err);
        })
    
    }], function (error, success) {
			if (error) return next(error);
      res.locals.header = success[0];
			res.locals.footer = success[1];
			next();
		})
};


