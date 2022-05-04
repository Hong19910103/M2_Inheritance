export class Circle {

    private _color:string;
    private _radius:number;

    constructor(color: string,
                radius: number) {
        this._color = color;
        this._radius = radius;
    }

    getColor(): string {
        return this._color;
    }

    setColor(color: string) {
        this._color = color;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(radius: number) {
        this._radius = radius;
    }

    getArea(){
       return   this.getRadius()*this.getRadius()*Math.PI;
    }

    getPerimeter(){
        return this.getRadius()*2*Math.PI;
    }

}