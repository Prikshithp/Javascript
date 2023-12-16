// scope level and mini hoisting
function one(){
    const username = "prikshit";

    function two(){
        const website ="youtube";
        console.log(username);
    }
    console.log(website);
    two();
}
one();
