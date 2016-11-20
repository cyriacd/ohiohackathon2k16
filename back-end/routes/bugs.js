var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/', function(req, res){
  res.json({message: "Bug Route Works."});
});

router.post('/bugs', function(req, res){
  res.json({message: "Saved Successfully!"});
});

module.exports = router;
