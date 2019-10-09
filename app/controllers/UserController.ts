import express = require('express');
import jwt = require('jsonwebtoken');
import mongoose = require('mongoose');

import User from '../models/user';

interface UserInterface {
    username: string,
    password: string
}

export const user_list = function(req: express.Request, res: express.Response, next: express.NextFunction){
    jwt.verify(res.locals.token, "token", function(error: Error, authData: string | object){
        if(error){
            res.status(500).send({
            error: error.message
            })
        } else {
            User.find()
            .exec(function(err, result){
                if(err) {
                    res.status(500).send({
                        error: err.message
                    })
                } else {
                    res.send({
                        logged_user: authData,
                        users: result
                    });
                }
            })
        }
    })
   
}

export const user_create = function(req: express.Request, res: express.Response, next: express.NextFunction){
    console.log("Body is: "+req.body);

    new User({
        username: req.body.username,
        password: req.body.password
    }).save(function(err, result){
        if(err) {
            res.send({
                error: err.message
            })
        } else {
            res.send(result);
        }
    })
}

export const login_post = function(req: express.Request, res: express.Response, next: express.NextFunction){
    User.findOne({username: req.body.username})
    .exec(function(err: Error, user: UserInterface){
        if(err){
            res.send({
                error: err.message
            })
        } else {
            if(typeof user === 'undefined'){
                res.send({
                    error: "Username not found"
                })
            } else if(user.password !== req.body.password){
                res.send({
                    error: "Incorrect Password"
                })
            } else {
                jwt.sign({user}, "token", function(error: Error, token: string){
                    res.send({
                        token
                    })
                })
            }
        }
    })
}