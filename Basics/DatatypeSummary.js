//primitive datatype (7 types) : number,boolean,string,symbol,undefined,null,bigint - call by value

const id=Symbol('123')
const sid=Symbol('123')

console.log(id==sid)

const a=123 
const b=123.3 // int and double values both come inside number

//non-primitvite datatype : object, array, function - call by reference

let arr=[12,23,34]
console.log(arr)
let obj={
    name:"Rudra",
    age:12,
}
//object are defined with curly braces and key value pairs

let myfunc=function(){
    console.log("Hello")
}

console.log(typeof myfunc)
console.log(typeof arr)
console.log(typeof obj)

// all the non primitive data types returns object as dataype, even though function shows typeof as function
// but it actually returns function object.

//stack - all primitive data types are stored here - gives you a copy of the value
//heap - all non-primitive datatypes are stored here - gives you the original value

let a1="Hello How are you?"
let b1=a1;
a1="I am good."

console.table([a1,b1])

let ob={
    name:"Rudra",
    age:22
}

let ob1=ob
ob.name="Santosh"

console.table([ob.name,ob1.name])