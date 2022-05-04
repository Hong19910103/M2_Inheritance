export class Shape {

    private _name: string;
    private _color:string;

    constructor(name: string,
                color: string) {
        this._name = name;
        this._color = color;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getColor(): string {
        return this._color;
    }

    setColor(color: string) {
        this._color = color;
    }
}

// let shape1 = new Shape("tam giac","pink")
//
// console.log(shape1.getColor());