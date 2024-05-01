let name = 'Abhishek'
const repoCount = 50

//console.log(name + repoCount + " Value")

console.log('Hello my name is ${name} and my repo count is ${repoCount}')

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Mini-Tiwari')

console.log(gameName)

console.log(gameName.__proto__)

//console.log(gameName.indexOf('i')); --> 1st ocuurence index

//const newString = gameName.substring(1,5) --> (startIndx,endIndx(not inclusive))
//console.log(newString);

const anotherString = gameName.slice(-4,5)
console.log(anotherString)

const stringOne = '    hitesh      '
console.log(stringOne);
console.log(stringOne.trim());

const url = 'https://abhishek.com/abhishek%20anand'
console.log(url.replace('%20' , '-'))
console.log(url);

console.log(url.includes('anand'));

console.log(url.split('/'));