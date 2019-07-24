"use strict";
//#region  基本类型定义
// let a:string = '123'
// console.log(a)
//#endregion
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//#region  枚举类型
// enum color{red = 1,blue = 2,black = 3}
// let c:color = color.blue;
// console.log(c)
//#endregion
//#region  重载
// function getInfo(name:string):string;
// function getInfo(name:string,age:number):string;
// function getInfo(name:any,age?:any):any{
//     if(typeof age !== 'number'){
//         return `我没有age`
//     }else{
//         return `我的名字是_${name},年龄是_${age}`
//     }
// }
// alert(getInfo('ljc',24));
//#endregion
//#region  类
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     getInfo():string{
//         return this.name;
//     }
// }
// let p = new Person('ljc');
// alert(p.getInfo())
//#endregion
//#region  类的继承 extends super
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getInfo = function () {
        return this.name;
    };
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name) {
        return _super.call(this, name) || this;
    }
    return student;
}(Person));
var stu = new student('yhy');
alert(stu.getInfo());
//#endregion
