var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.json({message: "Users Route Works."});
});

module.exports = router;
