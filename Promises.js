//Promises => object represnting eventual competional
const promiseOne= new Promise(function(resolve,reject){
    // Do an Async Task
    //DB calls, cryptography ,network
    setTimeout(function(){
        console.log("Aysc task is completed")
        resolve(); //Connected 
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("hello ji");
    resolve();
 },1000)
}).then(function(){
    console.log("Asyn 2 resolved");
})


const PromiseThree=new Promise(function(resolve,reject){
 setTimeout(function(){
    resolve({username:"Chai", email :"chai@example.com"})
 },1000)
})

PromiseThree.then(function(user){
    console.log(user);

})


const PromiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh", passwrod:"123"})
        }
        else{
            reject('ERROR : Something Went Wrong')
        }
    },1000)

}) 

PromiseFour
.then((user)=>{
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})


const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh", passwrod:"123"})
        }
        else{
            reject('ERROR : Something Went Wrong With Js')
        }
    },1000)

})

async function SolvePromiseFive(){
    try {
        const response =await PromiseFive
    console.log(response);
    } catch (error) {
        console.log("Error");
    }
    
}
SolvePromiseFive();
