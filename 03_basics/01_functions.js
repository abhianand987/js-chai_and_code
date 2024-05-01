function sayMyName(){
    console.log('Abhishek Anand');
}

// sayMyName --> Reference of fn and agar parenthesis laga diya sayMyName() to ye hogya execution

sayMyName()

function addTwoNumbers(number1 , number2){  //function(parameters)
    console.log(number1 + number2);
    return number1 + number2
}

addTwoNumbers(3,7)  // arguments
addTwoNumbers(8 , "23")

addTwoNumbers(4 , "ab")


function loginUserMessage(username){

    if(username === undefined){
        console.log('Please enter the user name');
    }
    
    return `${username} just logged in`
}

console.log(loginUserMessage('Abhishek'))

//loginUserMessage() undefined just logged in