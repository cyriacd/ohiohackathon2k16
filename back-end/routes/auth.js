var express = require('express');
var http = require('http');
var router = express.Router(); //Get instance of the Router

//to get the token
router.post('/', function(req, res){
  var code = req.body.code

  var data = querystring.stringify({
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': 'http://itslyt.us/app/'
  });

  var client_id = "004f5643d4f44a9ca7dc35adb9ad560f";
  var client_secret = "09bf1dccc0cb4a15aec478c1bfeb4784";

  var concat_str = new Buffer(client_id + ":" + client_secret).toString('base64');
  var options = {
    hostname: "accounts.spotify.com",
    path: "/api/token",
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + concat_str
    }
  }

  var req = http.request(options, function(res) {
    res.on('data', function(body){
      console.log('Body: ' + body);
    });

    res.on('error', function(e){
        console.log('Request issue: ' + e);
    });
  });

  req.write(data);
  req.end();
});

router.post('/refresh', function(req, res){
  var refresh_token = req.body.refrest_token

  var data = querystring.stringify({
      'grant_type': 'refresh_token',
      'refresh_token': request_token
  });

  var client_id = "004f5643d4f44a9ca7dc35adb9ad560f";
  var client_secret = "09bf1dccc0cb4a15aec478c1bfeb4784";

  var concat_str = new Buffer(client_id + ":" + client_secret).toString('base64');
  var options = {
    hostname: "accounts.spotify.com",
    path: "/api/token",
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + concat_str
    }
  }

  var req = http.request(options, function(res) {
    res.on('data', function(body){
      console.log('Body: ' + body);
    });

    res.on('error', function(e){
        console.log('Request issue: ' + e);
    });
  });

  req.write(data);
  req.end();
});

module.exports = router
