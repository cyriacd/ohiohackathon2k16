var express = require('express')
require = express.Router()

//TODO: Grab all the playlists of the user.
router.get('/playlists', function(req, res){
  res.json({message: "Playlist Route Works."})
})

module.exports = router;
