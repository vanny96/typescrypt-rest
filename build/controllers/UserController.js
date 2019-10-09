"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var user_1 = __importDefault(require("../models/user"));
exports.user_list = function (req, res, next) {
    console.log("Inside with token: " + res.locals.token);
    jwt.verify(res.locals.token, "token", function (error, authData) {
        if (error) {
            res.status(500).send({
                error: error.message
            });
        }
        else {
            user_1.default.find()
                .exec(function (err, result) {
                if (err) {
                    res.status(500).send({
                        error: err.message
                    });
                }
                else {
                    res.send({
                        logged_user: authData,
                        users: result
                    });
                }
            });
        }
    });
};
exports.user_create = function (req, res, next) {
    console.log("Body is: " + req.body);
    new user_1.default({
        username: req.body.username,
        password: req.body.password
    }).save(function (err, result) {
        if (err) {
            res.send({
                error: err.message
            });
        }
        else {
            res.send(result);
        }
    });
};
exports.login_post = function (req, res, next) {
    user_1.default.findOne({ username: req.body.username })
        .exec(function (err, user) {
        if (err) {
            res.send({
                error: err.message
            });
        }
        else {
            if (typeof user === 'undefined') {
                res.send({
                    error: "Username not found"
                });
            }
            else if (user.password !== req.body.password) {
                res.send({
                    error: "Incorrect Password"
                });
            }
            else {
                jwt.sign({ user: user }, "token", function (error, token) {
                    res.send({
                        token: token
                    });
                });
            }
        }
    });
};
