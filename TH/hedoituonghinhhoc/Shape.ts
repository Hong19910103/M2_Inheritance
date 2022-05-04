export class Shape {

    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    getColor(): string {
        return this._color;
    }

    setColor(color: string) {
        this._color = color;
    }

    getFilled(): boolean {
        return this._filled;
    }

    setFilled(filled: boolean) {
        this._filled = filled;
    }

    toString() {
        return ` a shape with color of ${this.getColor()} and filled ${this.getFilled()}`
    }
}

let s1 = new Shape("pink", false);
// console.log(s1.toString());
