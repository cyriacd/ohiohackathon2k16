var express = require('express')
var User = require('../models/users.js'); //Users DB

var router = express.Router(); //Get instance of the Router

router.get('/', function(req, res){
  return res.redirect("https://accounts.spotify.com/authorize?client_id=004f5643d4f44a9ca7dc35adb9ad560f&response_type=code&redirect_uri=http://itslyt.us/app/");
})

router.post('/', function(req, res){
  User.findOne({username: req.body.username, password: req.body.password }, function(error, user){
    if(user === null){
      return res.json({user_accepted: false, message: "Incorrect Username or Password."});
    }
    return res.json({user_accepted: true, client_id: "004f5643d4f44a9ca7dc35adb9ad560f", response_type: "code", redirect_uri: "localhost:80/welcome"});
  });
});

module.exports = router;
