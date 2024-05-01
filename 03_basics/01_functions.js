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

function calculateCartPrice(...num1){  // ... is rest operator as well as spread operator to combine objects + arrays
     return num1
}

// ... rest operator is used when we dont know how many parameters we have and it returns an array

console.log(calculateCartPrice(100,200,400)) //bcoz of ... it will return an array -->[100,200,400] else it will just return the first argument (100)

const user = {
    username : 'abhishek',
    prices : 100
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username : 'sam',
    price : 19998
})

const myArr = [200 , 300 , 400]

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue(myArr));