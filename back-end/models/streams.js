var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StreamSchema = new Schema({
  playlist_id: {type: String, select: false, required: false},
  spotify_username: {type: String, select: false, required: false },
  stream_name: {type: String, select: false, required: true},
  stream_date: {type: String, select: false, required: true },
  stream_description: {type: String, select: false, required: true }
});

module.exports = mongoose.model('Stream', StreamSchema);
