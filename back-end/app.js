var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

//Setting up require for routing
var port = process.env.PORT || 8079;
var app = express(); // starts application
var router = express.Router();
 //gets an instance of the route

/*
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
*/

app.use(require('./routes'));

app.listen(port);
console.log("Working on PORT: " + port);

/*
//Connects to database
var db = mongoose.connection;
db.once('open', function(){
  console.log("the database is open.");
})

mongoose.connect('mongodb://localhost/test'); //Sets up database
*/
