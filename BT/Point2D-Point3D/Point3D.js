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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Point2D_1 = require("./Point2D");
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this._z = z;
        return _this;
    }
    Point3D.prototype.getZ = function () {
        return this._z;
    };
    Point3D.prototype.setZ = function (z) {
        this._z = z;
    };
    Point3D.prototype.getXYZ = function () {
        return __assign(__assign({}, _super.prototype.getXY.call(this)), { z: this._z });
    };
    Point3D.prototype.setXYZ = function (x, y, z) {
        _super.prototype.setXY.call(this, x, y);
        this._z = z;
    };
    return Point3D;
}(Point2D_1.Point2D));
var point3d1 = new Point3D(3, 5, 7);
console.log(point3d1.getXYZ());
point3d1.setXYZ(7, 5, 9);
console.log(point3d1.getXYZ());
