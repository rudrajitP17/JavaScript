//types of initialising a string

const name="Rudra"
const nam1=new String("Rudra");

const age=22

console.log(name+age) // bad practice

console.log(`My name is ${name} and my age is ${age}`) // Good practice

//when you use new keyword, it stores the string in a key value format as an object and that object
//has various methods for functioning.

console.log(nam1.toUpperCase())
console.log(nam1.replace('R','P'))
console.log(nam1.__proto__) 
// This is the prototype we get when we use new keyword, we can use to access the other function or
// we can directly use other functions. 
console.log(nam1[1])
// A lot of functions like trim, indexof, charAt, split are there.
