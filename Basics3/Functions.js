function saymyname(){
    console.log("rudrajit")
}

saymyname()
//nomral function
function add(number1, number2){
    return number1+number2
}
console.log(add(3,4))
//parameterised function

function calc(...num1){
    return num1
}
console.log(calc(100,200,300))
//how to pass multiple values via single arguement
function calc1(val,val2,...num){
    return num
}
console.log(calc1(100,200,300,400))
// the first 2 values in this case are stored inside variable val1,val2

const a={
    name:"rudra",
    age:12
}

function obj(user){
    console.log(user.name+" "+user.age)
}

obj(a)

// this is how we pass object as a arguement in a function
