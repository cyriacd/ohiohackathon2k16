var express = require('express')
//var User = require('../models/users.js'); //Users DB

router = express.Router(); //Get instance of the Router

router.get('/login', function(req, res){
  res.json({message: "THIS WORKS!?"})
})

/*router.post('/login', function(req, res){
  User.findOne({username: req.body.username, password: req.body.password }, function(error, user){
    console.log(error);
    if(error){
      res.json({user_accepted: false, message: "Incorrect Username or Password."});
    }
    res.json({user_accepted: true, client_id: "004f5643d4f44a9ca7dc35adb9ad560f", response_type: "code", redirect_uri: "localhost:80/welcome"});
  });
});
**/
module.exports = router;
