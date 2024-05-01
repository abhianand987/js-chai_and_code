//Dates

//today's date
let myDate = new Date()
console.log(typeof myDate); // object
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

// let newDate = new Date( 2024 , 3 ,23 , 13 , 29 , 34) //Jan starts from 0
// console.log(newDate.toLocaleString());
// let myDateOne = new Date("1970-01-02")
// console.log(myDateOne.toDateString());

//console.log(myDateOne.getTime()); //gives ms since Jan 1 1970

let myTimeStamp = Date.now()
//console.log((myTimeStamp - newDate.getTime())/(60000*60*60));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
