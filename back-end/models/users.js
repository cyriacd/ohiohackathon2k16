var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type: String, select: true, required: true },
  password: {type: String, select: false, required: true},
  location: {type: String, select: false, required: false },
  user_description: {type: String, select: false, required: false },
  spotify_username: {type: String, select: false, required: false }
});

module.exports = mongoose.model('User', UserSchema);
