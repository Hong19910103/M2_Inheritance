import {Circle} from "./Circle";

class Cylinder extends Circle{ // tạo lớp con mới từ lớp cha Circle có thêm thuộc tính height

    private _height:number;

    constructor(color: string,
                radius: number,
                height: number) {
        super(color, radius);
        this._height = height;
    }

    getHeight(): number { // lấy ra chiều cao của hình
        return this._height;
    }

    setHeight(height: number) {// cài đặt lại chiều cao của hình
        this._height = height;
    }
    getVolume(){ // hàm lấy ra thể tích của hình trụ
        return this.getArea()*this.getHeight();
    }
}

let cylinder1 = new Cylinder("pink",7,9);
console.log(cylinder1.getArea());
console.log(cylinder1.getVolume());
