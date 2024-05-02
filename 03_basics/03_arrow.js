const user = {
    username : 'Abhishek' , 
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(`${user.username} , welcome to the website`);
        console.log(this); 
        //{
//   username: 'Abhishek',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
        //this refers to current context
    }

}
// context ka mtlb simple variables kya kya values hold kr rhi hai
// user.welcomeMessage()
// user.username = 'Jimmy'
// user.welcomeMessage()

console.log(this); // {} yha pe current context is empty and node environment me this refers to empty object
//Same if we run in browser then it will o/p will be Window object since yhi global object hai in browser.

// function chai(){
//     let username = 'hitesh'
//     console.log(this); // lamba chora about the fn aarha idhr
//     console.log(this.username); //undefined bcoz only works in objects
// }
// chai()

// const chai = function(){
//     let username = 'hitesh'
//     console.log(this.username); //undefined
// }

// just remove the fn keyword and add arrow keyword after ()

const chai = () => {
    let username = 'hitesh'
    console.log(this.username); //undefined
    console.log(this); // {} , so in arrow fn this keyword has empty objects
}
chai()

// const addTwo = (num1,num2) => {
//       return num1 + num2
// }
// If curly braces used then return keyword likhna mandatory

//Implicit return --> Just remove paranthesis and bring code to same line
const addTwo = (num1,num2) => (num1 + num2)
//Agar paranthesis used to no need of return 

console.log(addTwo(2,4));

