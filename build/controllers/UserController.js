"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
exports.user_list = function (req, res, next) {
    user_1.default.find()
        .exec(function (err, result) {
        if (err) {
            res.status(500).send({
                error: err.message
            });
        }
        else {
            res.send(result);
        }
    });
};
