var express = require('express');
require = express.Router();

router.get('/login', function(req, res){
  res.json({message: "Login Route Works."});
});

module.exports = router;
