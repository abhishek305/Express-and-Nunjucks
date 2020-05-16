const express = require("express");

const app = express();
const homeRoute = require('./routes/home')
const aboutRoute = require('./routes/about')
var path = require('path');


const port = 4000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/home.html'))
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname + '/views/about.html'))
// });

app.use('/',homeRoute)
app.use('/about',aboutRoute)

app.listen(port, () => {
  console.log("started on", port);
});
