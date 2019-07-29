"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//实现Mysql数据库类
var MysqlDB = /** @class */ (function () {
    function MysqlDB(name) {
        console.log(name);
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxx'
            }
        ];
        return list;
    };
    return MysqlDB;
}());
exports.MysqlDB = MysqlDB;
//实现MSsql数据库类
var MSsqlDB = /** @class */ (function () {
    function MSsqlDB() {
    }
    MSsqlDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MSsqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MSsqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MSsqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MSsqlDB;
}());
exports.MSsqlDB = MSsqlDB;
