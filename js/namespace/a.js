"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u7CAE\u98DF");
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
exports.default = A;
//export {A}
