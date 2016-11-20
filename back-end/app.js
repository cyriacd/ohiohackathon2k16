var express = require('express');
var app = express();

//Setting up require for routing
var port = process.env.PORT || 8080;
var router = express.Router(); //gets an instance of the router

app.use(require('./routes'));

app.listen(port);
console.log("Working on PORT: " + port);

var spotifyWebApi = require('spotify-web-api-node');


var spotifyApi = new spotifyWebApi({
  clientId : '004f5643d4f44a9ca7dc35adb9ad560f',
  clientSecret : '09bf1dccc0cb4a15aec478c1bfeb4784'
});

spotifyApi.setAccessToken('BQBReQf_u3JZrTUco1ye2r3TXEpaxLy04vj02SVFoAYahU9Z6aI-5F1UJf8jKxlgR8CVFHR5MNXiJWLYatSJpL4JJxMshLocGmJ7TJ6N2O5Yim3mr7m0NqEAVlkjYE0mjqleypeQ_AM');

var trackId = '';

  // Get a user's playlists 
var a = spotifyApi.getUserPlaylists('seanhack94');
a.then(function(data) {
    console.log(data.body.items[0].id);
    trackId = data.body.items[0].id;
  },function(err) {
    console.log('Something went wrong!', err);
  });


spotifyApi.getPlaylistTracks('seanhack94', '5FVEoptj2GDKO5qpqX56Ra')
.then(function(data) {
	console.log(data.body.items[3].track.id);
}, function(err) {
	console.log('Something went wrong!', err);
});