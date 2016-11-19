var express = require('express');
require = express.Router();

router.get('/party', function(req, res){
  res.json({message: "Party Route Works."});
});

module.exports = router;
