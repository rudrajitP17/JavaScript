let a=300
var b=400

//global scope ^^

if(true)
{
    let a=3
    var b=4
    const c=5

    console.log("Inner "+a)
}

//block scope ^^

console.log(a)
console.log(b)
// console.log(c)

//var is  variable which is does not follow scope methodlogies
//let variable and const variable defined inside a scope can only be used inside a scope and defined
//ouside a scope can only be used outside a scope.

function one(){
    const username="Rudra"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    two()
    // console.log(website)
}
one()
//nested scope states parent function can access values inside child function, but child function
// cannot access values inside parent function

hone()

function hone(num){
    return num+1
}

// htow()
//this type of function creation cannot be accessed in the lines of code before it is acrually created
const htow=function(num){
    return num+1
}
//this type of function creation is called expression also