var express = require('express');
require = express.Router();

router.get('/songs', function(req, res){
  res.json({message: "Song Route Works."});
});

module.exports = router;
