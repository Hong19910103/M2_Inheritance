import {Shape} from "./Shape";

class Circle extends Shape { // tao lop hinh tron co tu lop cha shape
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) { // mowr rong them thuoc tinh radius cua hinh tron
        super(color, filled);
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(radius: number) {
        this._radius = radius;
    }

    getArea() {
        return this.getRadius() * this.getRadius() * Math.PI;
    }

    getPerimeter() {
        return this.getRadius() * 2 * Math.PI;
    }

    toString(): string {
        return `A Circle with radius= ${this.getRadius()}, which is a subclass of ${super.toString()}`
    }
}

let c1 = new Circle("red", true, 12);
console.log(c1.toString());
