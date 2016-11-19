var express = require('express');
require = express.Router();

router.get('/playlists', function(req, res){
  res.json({message: "Playlist Route Works."});
});

module.exports = router;
