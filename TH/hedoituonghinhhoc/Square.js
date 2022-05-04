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
var Rectangle_1 = require("./Rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        return _super.call(this, color, filled, side, side) || this;
    }
    Square.prototype.getSide = function () {
        return this.getWidth(); // tao thuoc tinh moi bang thuoc tinh cua thuoc tinh cha
    };
    Square.prototype.SetSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    // gi de phuong thuc
    Square.prototype.setWidth = function (width) {
        this.SetSide(width);
    };
    // ghi de thuoc tinh length
    Square.prototype.setLength = function (length) {
        this.SetSide(length);
    };
    Square.prototype.toString = function () {
        return "A Square with side=".concat(this.getSide(), ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Square;
}(Rectangle_1.Rectangle));
var square1 = new Square("yellow", true, 6);
// console.log(square1);
// console.log(square1.toString());
console.log(square1.getSide());
console.log(square1.setLength(8));
console.log(square1);
