const marvelHeros = ['thor' , 'ironman' , 'spiderman']

const dcHeros =['superman' , 'batman']

//marvelHeros.push(dcHeros)
marvelHeros.concat(dcHeros)
console.log(marvelHeros.concat(dcHeros));

const all_heros = [...marvelHeros , ...dcHeros]
// spread ---> ... can combine many arrays together
console.log(all_heros);

const anotherArray = [1,2,3 , [4,5,6] , 7 , [6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

// another datatype to array

console.log(Array.isArray("abhi"));

console.log(Array.from("abhi")); // ['a' , 'b' , 'h' , 'i']

console.log(Array.from({
    name : 'abhi'
})); // returns empty array bcoz it does not array kisko bnana hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// 3 main methods Array.isArray() , Array.from() , Array.of()

