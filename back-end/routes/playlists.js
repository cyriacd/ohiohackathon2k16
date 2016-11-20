var express = require('express')
var router = express.Router()

//TODO: Grab all the playlists of the user.
router.get('/', function(req, res){
  res.json({message: "Playlist Route Works."})
});

//TODO: Get specific playlist
router.get('/:playlist_id', function(req, res){

});

module.exports = router;
