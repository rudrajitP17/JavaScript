//Ways of initialising
const myarr=[1,2,3,4,"Hello","hi"]
const myarr1=new Array(1,2,3,4,"Hello")
//Values of mixed type can be stored in a single array and it's size can also be altered.
//Even arrays inside arrays can be stored just liked that
console.log(myarr[1])
console.log(myarr.length) // this is not a function
console.log(myarr.join()) // converts array to string
myarr.push(7)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(9) // add values to the starting of array
console.log(myarr)
myarr.shift() // removes value from starting of array
console.log(myarr)
console.log(myarr.slice(1,3)) // prints array between this given indexes exclusing the last index and doesn't remove this portion of array
console.log(myarr)  
console.log(myarr.splice(1,3)) // prints array between this given indexes including the last index and does remove this portion of array
console.log(myarr)

const arr=[1,2,3]
const arr1=[4,5,6]
// console.log(arr.push(arr1))
const arr3=arr.concat(arr1)// merges two array
const arr5=[...arr1,...arr]//merging can be done in this way too
console.log(arr5)
console.log(arr3) 
const arr4=[1,2,[3,4],5,[6,7,[8,9]],10]
console.log(arr4[2][1]) // subarray elements can be accessed in this way
console.log(arr4.flat(Infinity)) // it combines arrays with subarray into 1 array

console.log(Array.isArray("Hitesh")) // checks whether array is already there or not
console.log(Array.from("Hitesh")) // creates array with string
let s=100,s2=200,s3=3000
console.log(Array.of(s,s3,s2)) // creates array with the given elements