import {Shape} from "./Shape";

class Triangle extends Shape {

    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string,
                color: string,
                side1: number,
                side2: number,
                side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getSide1(): number {
        return this._side1;
    }

    setSide1(side1: number) {
        this._side1 = side1;
    }

    getSide2(): number {
        return this._side2;
    }

    setSide2(side2: number) {
        this._side2 = side2;
    }

    getSide3(): number {
        return this._side3;
    }

    setSide3(side3: number) {
        this._side3 = side3;
    }

    getPerimeter() {
        return this._side1 + this._side2 + this._side3;
    }

    getArea(){
        return Math.sqrt((this.getPerimeter()/2)*
            (this.getPerimeter()-this._side1)*
            (this.getPerimeter()-this._side2)*
            (this.getPerimeter()-this._side3))
    }
    show(){
        return ` Đây là hình : ${super.getName()} 
                 màu : ${super.getColor()}
                 có cạnh thứ nhất là : ${this._side1} 
                 cạnh thứ hai là : ${this._side2}
                 cạnh thứ ba là : ${this._side3}`
    }
}

let triangle1 = new Triangle("tam giác ","pink",6,8,5);
let triangle2 = new Triangle("tam giác2 ","yellow",6,8,5);

console.log(triangle1.show());
console.log(triangle2.show());
console.log(triangle1.getArea());
console.log(triangle1.getPerimeter());

