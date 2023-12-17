// Arrow function and this
// this -> use to refer current context
const user={
    username:"prikshit",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website `);
    }
}
user.welcomeMessage();
user.username="bawa";
user.welcomeMessage();
// this default in nodejs -> empty obj paranthesis
// this defualt in browser -> window 


//function chai(){
  //  console.log(this);
//}
// chai();
//this ko function ke anadar print kre tho bhuth kuch aata hai
// function ke anadar this kaam ni krta undefined rhega


//arrow function
const chai = ()=>{
    let username="prikshit";
    console.log(username);

}
chai();

// const addtwo =(num1,num2)=>{
//     return num1+num2;

// }
// console.log(addtwo(1,2));

//arrow func using implicit return


