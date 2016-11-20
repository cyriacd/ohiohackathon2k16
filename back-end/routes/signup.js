var express = require('express');
var http = require('http');
var User = require('../models/users.js'); //Users DB

var router = express.Router(); //instance of express router
router.get('/', function(req, res){
  console.log("THIS WORKS!?");
});

router.post('/', function(req, res){
  User.findOne({username: req.body.username, password: req.body.password }, function(error, user){
    if(user === null){
      new User({username: req.body.username, password: req.body.password }).save(); //Not how youre supposed to do this.
      return res.json({user_accepted: true, message: "User successfully added."});
    }
    return res.json({user_accepted: false, message: "This user already exists. Sign in?"}); //Headers issue?
  });
});

module.exports = router;
