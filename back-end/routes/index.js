var express = require('express');
router = express.Router();

//Basic route for Hitting the API.

//Other routes in the project
router.use('/users',require('./users'));
router.use('/playlists', require('./playlists'));
router.use('/parties', require('./parties'));
router.use('/songs', require('./songs'));
router.use('/bugs',require('./bugs'));
router.use('/login', require('./login'));

router.get('/', function(req, res){
  res.json({message: "Welcome to the API for Lyt."});
});

module.exports = router;
