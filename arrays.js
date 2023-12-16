// Collection of multiple elements . Arrays of js are dynamic
const myArr=[1,2,3,4,5,9]; //elements can be of different types like int , string

// array methods
myArr.push(8); // for adding in array
console.log(myArr);
myArr.pop();
console.log(myArr); // poping the last element
myArr.unshift(0);
console.log(myArr); // adding at start and this shift all other values
myArr.shift();
console.log(myArr); // removing from start

console.log(myArr.includes(9)); // returns true
console.log(myArr.indexOf(9)); // retuns index of ele and -1 if not present

const newArr= myArr.join();
console.log(myArr);
console.log(newArr); // type :> string


// slice()-> get subarray and dont affect the original array
const arr=[1,2,3,4,5];
const newarr=arr.slice(0,3); // first to 3-1 =2 include
console.log(newarr);
console.log(arr);

// splice()-> remove/add from existing array and change the original data
const splic=arr.splice(1,3);
console.log(splic);
console.log(arr);
