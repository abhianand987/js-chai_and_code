var c = 300
// global scope

if(true){
    let a = 10
    const b = 20
    var c = 30

    //Inside area is the scope --> aukat
    // block scope
}
// console.log(a); a not defined coming , obviously a ko maine andar define kra hai and usko bahar ni aana chaiye
// console.log(b); b is not defined 
console.log(c); // 30 is printing so don't user var , 300 is not printing
// Always avoid var and always use let

//nested scope

function one(){
    const username = 'abhishek'

    function two(){
        const website = 'youtube'
        console.log(username);
        // website variable ka aukat bas yahi curly braces tak hi hai
    }
    //console.log(website);

    two()
}
one()

//Normal fns

console.log(addOne(6)); // 7 is getting printed although fn is defined below
function addOne(num){
    return num + 1
}

//Expressions wali functions

// console.log(addTwo(13)); --> Cannot access 'addTwo' before initialization and aage concept hoisting

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(8));     //10
