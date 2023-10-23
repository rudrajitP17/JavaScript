console.log(2==2)
console.log(2>=2)
console.log(2>2)
console.log(2!=2)

console.log("2" == 2)
console.log("1" != 1) // js automatically does conversion

console.log(null > 0)
console.log(null >= 0)// This is true because comparison and equality check operator works differently
// comparison operator like >,<,>=,<= converts null to 0 then compares, while == doesn't do that.
console.log(null == 0) 

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0) // undefined in any which cannot be equal to zero

console.log("2"===2) // this operator also checks the datatype
