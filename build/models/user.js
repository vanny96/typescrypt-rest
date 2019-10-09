"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    password: String
});
exports.default = mongoose.model('User', UserSchema);
