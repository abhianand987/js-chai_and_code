// array specific loops
// for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world";

// for (const greet of greetings) {
//     console.log(greet);
// }

//Maps --> holds key,value pairs in the order in which they are inserted

const map = new Map()

map.set('IN' , 'India')
map.set('FR' , 'france')

//console.log(map);

for (const key of map) {
    console.log(key);
}
//[ 'IN', 'India' ].  ---> both key,value getting printed toether
//[ 'FR', 'france' ]

for (const [key,value] of map) {
    console.log(key ,'===', value);
} //if we want to extract both alag alag

const myObject = {
    name : 'Abhishek',
    age : 20,
    gender : 'Male'
}

for (const key of myObject) {
    console.log(key);
}//object is non-iterable here using for of


