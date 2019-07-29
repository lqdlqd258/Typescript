"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbc_1 = require("../modules/dbc");
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new dbc_1.MysqlDB('我要连接数据库啦');
exports.UserModel = UserModel;
