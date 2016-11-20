var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost/test'); //Sets up database

//Connects to database
var db = mongoose.connection;
db.once('open', function(){
  console.log("the database is open.");
})

//Setting up require for routing
var port = process.env.PORT || 8080;
var app = express(); // starts application
var router = express.Router();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./routes'));
/*
app.use('/signup', signup);
app.use('/login', login);
app.use('/bugs', bugs);
app.use('/playlists', playlists);
app.use('/streams', streams);
app.use('/songs', songs);
app.use('/users', users)
*/
app.listen(port);
console.log("Working on PORT: " + port);
