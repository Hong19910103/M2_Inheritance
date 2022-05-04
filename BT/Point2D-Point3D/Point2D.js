"use strict";
exports.__esModule = true;
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Point2D.prototype.getX = function () {
        return this._x;
    };
    Point2D.prototype.setX = function (x) {
        this._x = x;
    };
    Point2D.prototype.getY = function () {
        return this._y;
    };
    Point2D.prototype.setY = function (y) {
        this._y = y;
    };
    Point2D.prototype.getXY = function () {
        return {
            x: this._x,
            y: this._y
        };
    };
    Point2D.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
// let p1 = new Point2D(5,7);
// console.log(p1.getXY());
// p1.setXY(4,5);
// console.log(p1.getXY());
