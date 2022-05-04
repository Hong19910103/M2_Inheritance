import {Point2D} from "./Point2D";

class Point3D extends Point2D{
    private _z:number;

    constructor(x: number,
                y: number,
                z: number) {
        super(x, y);
        this._z = z;
    }

    getZ(): number {
        return this._z;
    }

    setZ(z: number) :void{
        this._z = z;
    }
    getXYZ(){
        return {...super.getXY(), z: this._z}
    }
    setXYZ(x:number,y:number,z:number):void{
       super.setXY(x, y);
       this._z = z;

    }
}

let point3d1 = new Point3D(3,5,7);

console.log(point3d1.getXYZ());
point3d1.setXYZ(7,5,9);
console.log(point3d1.getXYZ());

