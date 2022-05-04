"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Triangle.prototype.getSide1 = function () {
        return this._side1;
    };
    Triangle.prototype.setSide1 = function (side1) {
        this._side1 = side1;
    };
    Triangle.prototype.getSide2 = function () {
        return this._side2;
    };
    Triangle.prototype.setSide2 = function (side2) {
        this._side2 = side2;
    };
    Triangle.prototype.getSide3 = function () {
        return this._side3;
    };
    Triangle.prototype.setSide3 = function (side3) {
        this._side3 = side3;
    };
    Triangle.prototype.getPerimeter = function () {
        return this._side1 + this._side2 + this._side3;
    };
    Triangle.prototype.getArea = function () {
        return Math.sqrt((this.getPerimeter() / 2) *
            (this.getPerimeter() - this._side1) *
            (this.getPerimeter() - this._side2) *
            (this.getPerimeter() - this._side3));
    };
    Triangle.prototype.show = function () {
        return " \u0110\u00E2y l\u00E0 h\u00ECnh : ".concat(_super.prototype.getName.call(this), " \n                 m\u00E0u : ").concat(_super.prototype.getColor.call(this), "\n                 c\u00F3 c\u1EA1nh th\u1EE9 nh\u1EA5t l\u00E0 : ").concat(this._side1, " \n                 c\u1EA1nh th\u1EE9 hai l\u00E0 : ").concat(this._side2, "\n                 c\u1EA1nh th\u1EE9 ba l\u00E0 : ").concat(this._side3);
    };
    return Triangle;
}(Shape_1.Shape));
var triangle1 = new Triangle("tam giác ", "pink", 6, 8, 5);
var triangle2 = new Triangle("tam giác2 ", "yellow", 6, 8, 5);
console.log(triangle1.show());
console.log(triangle2.show());
console.log(triangle1.getArea());
console.log(triangle1.getPerimeter());
