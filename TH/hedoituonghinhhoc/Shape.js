"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this._color;
    };
    Shape.prototype.setColor = function (color) {
        this._color = color;
    };
    Shape.prototype.getFilled = function () {
        return this._filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this._filled = filled;
    };
    Shape.prototype.toString = function () {
        return " a shape with color of ".concat(this.getColor(), " and filled ").concat(this.getFilled());
    };
    return Shape;
}());
exports.Shape = Shape;
var s1 = new Shape("pink", false);
// console.log(s1.toString());
