//Immediately invoked function expressions
//IIFE
// function chai(){
//     console.log("db is connected");
// }
// chai();
(function chai(){
    console.log("DB CONNECTED");
})();

// (function)(execution call)
// iiefe global scope ke pollution se prob hoti hai tho global scope variable or scope ko htane ke liye iife use krte hai

// (()=>{

// })

( (name) =>{
    console.log(`hello ${name}`);
})("prikshit");