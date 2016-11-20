var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BugsSchema = new Schema({
    user_interface: {type: String, select: true, required: true},
    bug_description: {type: String, select: true, required: true },
    email_address: {type: String, select: false, required: true },
    username: {type: String, select: false, required: true }
});

module.exports = mongoose.model('Bug', BugsSchema);
