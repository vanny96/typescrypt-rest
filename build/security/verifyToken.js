"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    var bearer = req.headers.authorization;
    if (typeof bearer !== 'undefined') {
        console.log(bearer.toString());
        var token = bearer.toString().split(' ')[1];
        res.locals.token = token;
        next();
    }
    else {
        res.sendStatus(403);
    }
}
exports.default = default_1;
