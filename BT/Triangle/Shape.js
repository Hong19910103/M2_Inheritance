"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this._name = name;
        this._color = color;
    }
    Shape.prototype.getName = function () {
        return this._name;
    };
    Shape.prototype.setName = function (name) {
        this._name = name;
    };
    Shape.prototype.getColor = function () {
        return this._color;
    };
    Shape.prototype.setColor = function (color) {
        this._color = color;
    };
    return Shape;
}());
exports.Shape = Shape;
// let shape1 = new Shape("tam giac","pink")
//
// console.log(shape1.getColor());
