var mongoose = required('mongoose');
var Schema = mongoose.Schema;

var PlaylistSchema = new Schema({
  playlist_name: {type: String, select: true, required: true},
  playlist_date: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Playlist', PlaylistSchema);
