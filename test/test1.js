// function sum1(a:string,b:string):string{
//     return a +b;
// }
//
// function sum2(a:number,b:number):number{
//     return a+b;
// }
// function sum3(a:any,b:any):any{
//     return a+b;
//
// }
//
// console.log(sum3(4,6));
// console.log(sum3("hong","nguyen"))
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("Typescript"));
