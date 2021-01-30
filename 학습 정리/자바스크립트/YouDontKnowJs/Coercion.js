var Foo = {};
var a1 = Object.create(Foo);

Object.defineProperty(Foo, "constructor", {
    enumerable : false,
    value : function Gotcha() {
        
    }
})
console.log(a1.constructor)