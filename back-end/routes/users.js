var express = require('express');
require = express.Router();

router.get('/users', function(req, res){
  res.json({message: "Users Route Works."});
});

module.exports = router;
