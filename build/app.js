"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var apiRouter_1 = __importDefault(require("./router/apiRouter"));
// Create a new express application instance
var app = express();
// MongoDb Configuration
var dbUrl = "mongodb://localhost:27017/typerest";
mongoose.connect(dbUrl, { useNewUrlParser: true });
var db = mongoose.connection;
// Routing
app.use('/api', apiRouter_1.default);
// Listening on
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
