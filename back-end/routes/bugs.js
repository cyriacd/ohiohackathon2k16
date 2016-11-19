var express = require('express');
require = express.Router();

router.get('/bug', function(req, res){
  res.json({message: "Bug Route Works."});
});

module.exports = router;
