// In JS , OBJECTS and EVENTS(DOM EVENTS) are the main core things to master.
// 2 ways to declare objects --> literal(isme singleton ni bnega) and constructor(isme singleton bnega)
//Object.create() --> constructor based
// object literals

// object has keys and values pairs
const JsUser = {
    name : 'Abhishek',
    'full name' : "Abhishek Anand",
    age : 25,
    gender : 'Male',
    college : 'IIT Dhanbad',
    location : 'Hyserabad',
    isLoggedIn : false,
    lastLoginDays : ['Monday' , 'Saturdays']
}
// 2 ways to access the values of the objects --> 1) using dot  and 2) using square bracket
console.log(JsUser.age);
console.log(JsUser['age']);

console.log(JsUser["full name"]);
console.log(JsUser.fullname);

//A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

const mySymbol = Symbol('key1')
console.log(mySymbol); //Symbol(key1)

const JsUser2 = {
    name : 'Abhishek',
    'full name' : "Abhishek Anand",
    age : 25,
    gender : 'Male',
    college : 'IIT Dhanbad',
    mySymbol : 'myKey1'
}

console.log(JsUser2); // mySymbol is geeting printed in key and not 'key1'

console.log(typeof JsUser2.mySymbol);

// to use it as symbol use square bracket []

const JsUser3 = {
    name : 'Abhishek',
    'full name' : "Abhishek Anand",
    age : 25,
    gender : 'Male',
    college : 'IIT Dhanbad',
    [mySymbol] : 'myKey1' //interview qn : how to use symbol in the object
}

JsUser3.age = 45;

Object.freeze(JsUser) // once u freeze the object then u cannot change its value

JsUser.gender = 'female'

console.log(JsUser3);
console.log(JsUser3[mySymbol]);

console.log(JsUser);

JsUser2.greeting = function(){
    console.log('Hello JS user');
}
console.log(JsUser2);

JsUser2.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(JsUser2.greetingTwo());

