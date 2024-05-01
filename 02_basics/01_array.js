// arrays
// Documentation from mdn
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// shallow copy : the original object and the copy share the same reference so any of the changes will impact both the copies and in deep copy they dont share the references.

const myArr = [0,1,3,4, 'Abhishek' , true]

const myHeroes = ['shaktiman' , 'marvel']

const myArr2 = new Array(1,2,3,4)

console.log(myArr2);

//Array Methods

myArr.push(6) // pushes elements at end
myArr.push('ABHISHEK')
myArr.push(19)
myArr.pop() // removes element from last
console.log(myArr);
myArr.unshift(9) // pushes elements @ start but first shifts each element by 1
myArr.shift() // removes elements from start

console.log(myArr);

console.log(myArr.includes(3)); //true

console.log(myArr.indexOf(4)); //3

const newArr = myArr.join() // converts array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice - startIndx , endIndx(exclusive)
// splice - startIndx , deleteCount and it deletes from the original array
console.log("A " , myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);

console.log("B " , myArr);

const myn2 = myArr.splice(1,4)
console.log(myn2);

console.log("B " , myArr);




