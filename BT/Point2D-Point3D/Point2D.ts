export class Point2D {

    private _x: number;
    private _y: number;

    constructor(x: number,
                y: number) {
        this._x = x;
        this._y = y;
    }

    getX(): number {
        return this._x;
    }

    setX(x: number): void {
        this._x = x;
    }

    getY(): number {
        return this._y;
    }

    setY(y: number): void {
        this._y = y;
    }

    getXY(): object {
        return {
            x: this._x,
            y: this._y
        };
    }

    setXY(x: number, y: number):void {
        this._x = x;
        this._y = y;
    }
}

// let p1 = new Point2D(5,7);
// console.log(p1.getXY());
// p1.setXY(4,5);
// console.log(p1.getXY());