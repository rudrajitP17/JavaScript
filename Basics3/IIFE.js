//Immediately invoked function expressions

(function chai()
{
    console.log("Hello")
})();

// if we wrap the entire function inside () and call it with another () this is known as iife
// if we are writing two iife one after another it is very imp to separate it with ;

(()=>{console.log("Hi")})();

((name)=>{console.log(`${name}`)})("Rudra")