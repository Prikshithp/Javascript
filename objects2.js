// obj using constructor 
const tinderuser=new Object();
//const tinderuser={}
tinderuser.id="prik123";
tinderuser.name="prikshit";
tinderuser.isLogin=false;


//merging two objs
const obj1={ 1:"a", 2:"b"};
const obj2={ 3:"a", 4:"b"};
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);
//merging using spread operator
const obj3={...obj1,...obj2};
console.log(obj3);

// selecting values from an object
console.log(tinderuser);
console.log(Object.values(tinderuser)); //returns an array of keys same goes for values

