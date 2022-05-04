import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private _width: number;
    private _length: number;


    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(width: number) {
        this._width = width;
    }

    getLength(): number {
        return this._length;
    }

    setLength(length: number) {
        this._length = length;
    }

    getAreaRec() {
        return this.getLength() * this.getWidth();
    }

    getPerimeterRec() {
        return (this.getWidth() + this.getLength()) * 2;
    }
    toString(): string {
        return  `A Rectangle with width=${this.getWidth()} and length=${this.getLength()}, which is a subclass of ${super.toString()}`;
    }
}
let r1 = new Rectangle("black",false,4,7);
// console.log(r1.toString());
// console.log(r1.getAreaRec());
// console.log(r1.getPerimeterRec());

