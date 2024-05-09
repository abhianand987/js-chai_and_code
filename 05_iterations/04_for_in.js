//for in --> takes index in array and keys in objects and maps are not iterable using for in
//mostly used in objects
const myObject = {
    js : 'Javascript',
    cpp : 'C++' ,
    rb : 'ruby'
}

for (const key in myObject) {
    console.log(key , '-->' , myObject[key]);
}

const arr = [1,2,3,4]

for(const val in arr){
    console.log(val); // prints the indices
}
const mp = new Map();

mp.set('in' , 'india')
mp.set('fr', 'france')

for(const key in mp){
    console.log(key);
} //no o/p sinces maps are not iterable through for in



