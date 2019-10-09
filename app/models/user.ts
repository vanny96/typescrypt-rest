import mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
})

export default mongoose.model('User', UserSchema);