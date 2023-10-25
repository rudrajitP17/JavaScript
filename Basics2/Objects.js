const sym=Symbol("key1")
//Ways of initialising
const juser={
    name:"Rudra",
    age:12, // by default the key is a string
    profession:"Software",
    "company":"futurense",
    [sym]:"mykey1" //symbol key has to be initialised in this way
}
console.log(juser.name)
console.log(juser.age) // keys can be accessed via dot operator or via ["..."]
console.log(juser["name"])
console.log(juser["company"]) // company key can only be accessed in this way since it is defined explicitly as a string
console.log(juser[sym]) // symbol key has to be accessed in this way
console.log(juser)

juser.age=13
console.log(juser.age)
// Object.freeze(juser) // this how we can freeze an object and no alterations and additions can be done
juser.age=14
console.log(juser.age)

juser.gender=function(){
    console.log("Male")
}
// this is how we can add functions
console.log(juser)

console.log(juser.gender)
console.log(juser.gender())

juser.hello=function(){
    console.log(`Hi ${this.name}`)
}
// via this keyword we can access values inside the same object and use it in some other key
console.log(juser.hello())

//ways of creating

const tinder=new Object() //not a singleton object
console.log(tinder)
const tinder1={} //singleton object
tinder1.id="123"
tinder1.name="Pudra"
tinder1.age=14
console.log(tinder1)

const regularuser={
    email:"prudrajit@gmail.com",
    username:{
        user:"123abc",
        password:"#####"
    }
}

console.log(regularuser.username) // how embedded objects

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={obj1,obj2} // object is merged into a new object
const obj4=Object.assign({},obj1,obj2) //merging of objects, the first given value is given as a the target and rest as the source
// if we don't give empty curly brace 1st value will be considered as target, so in that case obj1 and obj4 are same
const obj5={...obj1,...obj2} //merging of objects
console.log(obj3)
console.log(obj4)
console.log(obj5)
const objar=[
    {
        name:"abc",
        id:"123"
    },
    {
        name:"def",
        id:"234"
    }
]
console.log(objar[0].name) // how we can access array of objects
console.log(Object.keys(tinder1)) //returns keys as arrays
console.log(Object.values(tinder1)) // returns values as arrays
console.log(Object.entries(tinder1)) // combines key value pair into separate array entities
console.log(tinder1.hasOwnProperty('name')) // returns boolean value if key is present

const course={
    name:"javascript",
    duration:"1hr",
    difficulty:"easy"
}

const {difficulty}=course // by this we don't have to access dot operator every time to fetch values
console.log(difficulty)
const{difficulty:culty}=course //we can even change key name to shorter names
console.log(culty)