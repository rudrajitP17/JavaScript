"use strict"; // use modern js concepts 

let a=true

let num=Number(a)
console.log(num);

// true -> 1; false -> 0; "33" -> 33; "33ab" -> Nan (Not a number); null -> 0;

let b="";
let n=Boolean(b)
console.log(n);

// ""->false; "abc"->true (non-empty strings always gives true values); 1->true;0->false;

let val=33
let negv=-val // This is how we can get negative value
console.log(negv)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
console.log(2**2); //It give the power of 2 to the power 2

console.log(+true) // + is used as a conversion operator
console.log(+"") // empty string means false

let num1,num2,num3
num1=num2=num3=2*3 // This was we can define values for many similar variables;
console.log(num3)


console.log("1"+2) // It will be converted to string
console.log(1+"2") // "
console.log(1+1+"2") // If string is declared at lasr, firstly operation will be done, then it will be converted to string
console.log("1"+1+2) // If string is defined at first automatically everything will be converted to string