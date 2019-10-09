"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController = __importStar(require("../controllers/UserController"));
var verifyToken_1 = __importDefault(require("../security/verifyToken"));
var router = express_1.Router();
router.get('/', verifyToken_1.default, userController.user_list);
router.post('/', userController.user_create);
router.post('/login', userController.login_post);
exports.default = router;
