var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //TODO: Grab parties from DynamoDB and return them.
  res.json({message: "Streams Route Works."});
});

module.exports = router;
