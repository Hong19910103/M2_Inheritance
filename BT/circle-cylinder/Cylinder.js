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
var Circle_1 = require("./Circle");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, height) {
        var _this = _super.call(this, color, radius) || this;
        _this._height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this._height;
    };
    Cylinder.prototype.setHeight = function (height) {
        this._height = height;
    };
    Cylinder.prototype.getVolume = function () {
        return this.getArea() * this.getHeight();
    };
    return Cylinder;
}(Circle_1.Circle));
var cylinder1 = new Cylinder("pink", 7, 9);
console.log(cylinder1.getArea());
console.log(cylinder1.getVolume());
