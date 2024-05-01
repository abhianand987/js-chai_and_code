// Primitive Datatypes (Ye Call by value hote hai)

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt




//Non-primitive / Reference datatypes

// Arrays , Objects , Functions

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

//Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object"). 
//The language usually defaults to undefined when something is devoid of a value
//***************************MEMORY*******************************

// 2 types of memories --> Stack memory and Heap memory
// All Primitive datatype go in Stack memory and here we get an copy of a variable if assigned.
// Non primitive datatype go in Heap Memory and here we get the refrence of a variable if assigned


let youtubeName = "AbhishekAnand"
let anotherName = youtubeName

anotherName = "Rahul"

let userOne = {
    email : 'abc@xyz.com',
    upi : 'xyz@ybl'
};

let userTwo = userOne

userTwo.email = 'abhishek@icici.com'

console.log(userOne.email);
console.log(userTwo.email);
