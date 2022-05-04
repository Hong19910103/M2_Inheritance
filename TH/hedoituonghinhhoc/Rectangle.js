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
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this._width = width;
        _this._length = length;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this._width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this._width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this._length;
    };
    Rectangle.prototype.setLength = function (length) {
        this._length = length;
    };
    Rectangle.prototype.getAreaRec = function () {
        return this.getLength() * this.getWidth();
    };
    Rectangle.prototype.getPerimeterRec = function () {
        return (this.getWidth() + this.getLength()) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width=".concat(this.getWidth(), " and length=").concat(this.getLength(), ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
var r1 = new Rectangle("black", false, 4, 7);
// console.log(r1.toString());
// console.log(r1.getAreaRec());
// console.log(r1.getPerimeterRec());
