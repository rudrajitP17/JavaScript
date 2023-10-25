console.log(this)

const user={
    username:"Rudra",
    welcomemsg:function(){
        console.log(this)
        console.log(this.username)
    }
}
// this always returns the current context i.e the values stored inside variables. 
// this keyword globally returns an empty object
// this keyword inside object, can help you access the varaibles inside that object
user.welcomemsg()

function one()
{
    let user="Rudra"
    console.log(this)
    console.log(this.user)
}
one()
// this inside function doesn't gives you access to current variables, but instead it gives you a whole
// set of values which are defined internally
const chai=function(){
    let user="Rudra"
    console.log(this)
    console.log(this.user)
}
chai()
//same goes for expression
const chai1 = () => {
    let user="Rudra"
    console.log(this)
    console.log(this.user)
}
chai1()
//inside arrow function this returns an empty object as decribed globally.
const add=(num1,num2)=>{return num1+num2}
console.log(add(1,2))
const add1=(num1,num2)=>(num1+num2)
console.log(add1(1,2))
// replace function with => and put it infront of ()
// if you usen{} you have to specify return statement, if you use () you don't have to soecify return statement.

