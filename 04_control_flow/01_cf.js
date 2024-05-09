// if
const isUserloggedIn = true
const temperature = 41

const temperature_two = '41'

if(temperature_two === 41){
    console.log("Temperature is 41");
}else{
    console.log("Temperature is not 41");
}

// == will only check the value and === will check the value as well as the datatype

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// function addTwo(x,y){

//     return x + y

// }

// const addTwo = function(x,y){
//     return x + y;
// }

const addTwo = (x,y)=> x + y ;

console.log(addTwo(6,12));
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }