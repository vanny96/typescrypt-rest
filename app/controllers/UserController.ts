import express = require('express');
import User from '../models/user';

export const user_list = function(req: express.Request, res: express.Response, next: express.NextFunction){
    User.find()
    .exec(function(err, result){
        if(err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.send(result);
        }
    })
}

export const user_create = function(req: express.Request, res: express.Response, next: express.NextFunction){
    var user = new User({
        username: req.body.username,
        password: req.body.password
    }).save(function(err, result){
        if(err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.send(result);
        }
    })
}