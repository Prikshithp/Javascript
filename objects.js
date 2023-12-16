// object declare -> 1 > literal and constructor
// singleton -> constructor 
// obj literal
const mySym =Symbol("key1");
const Jsuser={
    name: "Prikshit",
    age : "20",
    "full name " : "Prikshit Sharma",
    [mySym]:"key1",
    location : "Himachal pradesh",
    email:"prikshit@gmail.com",
    isLogin: false,
    lastlogin : ["Monday","Saturday"]
}
console.log(Jsuser["age"]);
console.log(Jsuser["full name "]); // always use " " notation for accession obj
console.log( typeof Jsuser[mySym]);

console.log(Jsuser["email"]);
// Object.freeze(Jsuser);
Jsuser.email="prikshitgoogle.com";
console.log(Jsuser["email"]);
console.log(Jsuser);

Jsuser.greeting= function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting); // undefined function execute ni hua sirf reference aaya hai
console.log(Jsuser.greeting());

Jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(Jsuser.greetingtwo());