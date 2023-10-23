const a="Hello"
let b="Hi"
var c="Hola"
d="huihui"
let e;
// a="hh"
b="cc"
c="dd"

console.log(a)
console.table([a,b,c,d,e]);

/*
    In js mainly two types of variables are used const and let, const is used for declaring some value that
    is constant and let is used for values which are changed. Var is not used because it is problematic
    inside functional scope and block scope. You can declare values without a datatype also, but 
    that is not a best practice. Default value of any un-initialised variable is undefined.
*/
 let name="Rudra"
 let age=22
 let flag=true;
 let v=null;
 let und;

 console.table([name,age,flag,v,und]);
 console.table([typeof "Rud",typeof age, typeof null, typeof undefined])

 /*
    number, string, boolean, null, underfined, symbol, object are the datatypes. String can be used
    with '' or "" . Null is also defined as an object type varible, since when you typeof for null
    variable it shows object type. Symbol is a variable which is used to uniquely identify a scope,
    Semi-colons are not necessary in js, in case of spacing in some particular situations we use it. 
 */
