var express = require('express');
router = express.Router();

//Other routes in the projects
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

router.use('/bugs',require('./bugs'));
router.use('/playlists', require('./playlists'));
router.use('/streams', require('./streams'));
router.use('/songs', require('./songs'));
router.use('/users',require('./users'));
/*

router.get('/', function(req, res){
  res.json({message: "Welcome to the API for Lyt."});
});
*/
module.exports = router;
