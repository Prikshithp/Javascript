//Functions
function sayMyname(){
    console.log("hello prikhit");
}
// sayMyname //  function reference
sayMyname(); // function execution

//func to add two nums
// function addTwoNum(num1,num2){ // parameter
//     console.log(num1+num2);
// }
function addTwoNum(num1,num2){ // parameter
    let answer=num1+num2;
    return answer;
}
const result =addTwoNum(3,5); // argument
console.log(result);

function loginuser(username){
    if(username === undefined){
        console.log("please enter a username");
        return

    }
    return `${username} just login`
}
console.log(loginuser("prikshit"));
// agar kuch pass hi na karu tho undefined aaega naki null
