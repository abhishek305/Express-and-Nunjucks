const express = require("express");

const app = express();
const homeRoute = require('./routes/home')
const aboutRoute = require('./routes/about')
var path = require('path');
let nunjucks = require('nunjucks'); // templating framework


const port = 4000;

app.set("view engine", "html")

nunjucks.configure(['views/'], {   // setting a default views folder for templates 
    autoescape: false,
    express: app
})

app.use('/',homeRoute)
app.use('/about',aboutRoute)

app.listen(port, () => {
  console.log("started on", port);
});
