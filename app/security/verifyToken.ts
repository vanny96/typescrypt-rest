import express = require('express');

export default function(req: express.Request, res: express.Response, next: express.NextFunction){
    const bearer = req.headers.authorization;
    
    if(typeof bearer !== 'undefined'){
        console.log(bearer.toString())
        const token = bearer.toString().split(' ')[1];
        res.locals.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
}