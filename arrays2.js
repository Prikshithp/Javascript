const marvelhero=["thor","spiderman"];
const dchero=["superman","batman"];
//marvelhero.push(dchero);
console.log(marvelhero);

const allhero =marvelhero.concat(dchero);
//console.log(allhero);

const allnewhero=[...marvelhero,...dchero];
// console.log(allhero);

const another_array=[1,2,3,[4,5,6],7,[8,9]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("prikshit"));
console.log(Array.from("prikshit"));
console.log(Array.isArray({name : "prikshit"})); // returns empty array **** imp


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));