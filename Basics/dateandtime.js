//Ways of creation of date
const date=new Date();
console.log(date);
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toDateString())
//Dates can be printed in various manner

const d=new Date(2023,0,14)
console.log(d.toString())
const d1=new Date(1,14,2023)
console.log(d1.toString())
//Created date can be entered in both dd-mm-yyyy format and yyyy-dd-mm format. The only difference 
//between entering string and number is via number 0 is considered as Jan and via string 1 is consider as Jan
const d2=new Date("2023-1-14")
console.log(d2.toString())
const d3=new Date("1-15-2023")
console.log(d3.toString())
const timestamp=Date.now();
console.log(timestamp)
//returns milliseconds