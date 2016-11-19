var express = require('express');
var app = express();

//Setting up require for routing
var port = process.env.PORT || 8080;
var router = express.Router(); //gets an instance of the router

app.use(require('./routes'));

app.listen(port);
console.log("Working on PORT: " + port);
