const tinderUser = new Object()
const tinderUser2 = {}

console.log(tinderUser,tinderUser2); // {},{} no difference in both just that 1st wla singleton object hai and next wla non-singleton object

tinderUser.id = '123abc'
tinderUser.name = 'Jimmy'
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : 'xyz@gmail.com' , 
    fullName : {
        userFullName : {
            firstName : 'Abhishek',
            lastName : 'Anand'
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={
    1 : 'a', 2 : 'b'
}

const obj2 = {
    2 : 'c' , 4 : 'd'
}

const obj3 = Object.assign(obj1,obj2)
console.log(obj1,obj2,obj3);

//console.log(Object.assign({} , obj1 , obj2))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

//assign(1st , 2nd , 3rd ......nth) --> 1st object gets modified i.e, gets concated

const obj4 = {...obj1 , ...obj2} // spread operator 99% used for merging
console.log(obj4);

const users = [
    {
        id : 1,
        email : 'a@gmail.com'
    },
    {}, {}
]

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // you get all the keys of an object in an array

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); //less used --> 2d array with key-value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log('git merge --no-ff'); // properties

console.log('yo');

