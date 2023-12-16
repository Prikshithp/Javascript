//Functions with objects
function calculatecartprice(...num1){ // rest operator
return num1;
}
console.log(calculatecartprice(200,300,400,500)); // return an array


// function wtih obj
const user={
    username: "prikshit",
    price: 199
}
function handleobj(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobj(user);

const mynewarray=[200,300,100,600]

function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(mynewarray));