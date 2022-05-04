"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this._color = color;
        this._radius = radius;
    }
    Circle.prototype.getColor = function () {
        return this._color;
    };
    Circle.prototype.setColor = function (color) {
        this._color = color;
    };
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this._radius = radius;
    };
    Circle.prototype.getArea = function () {
        return this.getRadius() * this.getRadius() * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return this.getRadius() * 2 * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
