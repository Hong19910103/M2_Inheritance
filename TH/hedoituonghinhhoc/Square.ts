import {Rectangle} from "./Rectangle";

class Square extends Rectangle{

    constructor(color: string,
                filled: boolean,
                side:number) {
        super(color, filled,side, side);
    }

    getSide():number {
        return this.getWidth();// tao thuoc tinh moi bang thuoc tinh cua thuoc tinh cha
    }
    SetSide(side:number):void{ // gan lai thuoc tinh moi
        this.setWidth(side);
        this.setLength(side);
    }
    // gi de phuong thuc
    setWidth(width: number):void {
        this.SetSide(width);
    }
    // ghi de thuoc tinh length
    setLength(length: number):void {
        this.SetSide(length);
    }
    toString(): string {
        return  `A Square with side=${this.getSide()}, which is a subclass of ${super.toString()}`;
    }
}
let square1 = new Square("yellow",true,6)

// console.log(square1);
// console.log(square1.toString());
console.log(square1.getSide());
console.log(square1.setLength(8));
console.log(square1)