// most widely used

const coding = ['cpp' , 'js' , 'c' , 'python']
// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( (item) =>{
//     console.log(item);
// }) // simply prints above array

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// //callbackfn me fn ka reference dena hai just and execute ni krwana hai BRO

// // coding.forEach() for each has --> item , index , array

// coding.forEach( (item , indx , arr) => {
//      console.log(item , indx , arr);
// })

// const myCoding = [
//     {
//         lang : 'js',
//         ver : 5
//     } ,
//     {
//         lang : 'cpp',
//         ver : 3
//     }
//     ,
//     {
//         lang : 'python',
//         ver : 6
//     }
// ]

// myCoding.forEach(  (item , indx , arr) =>{
//       console.log(item.lang , indx , arr);
// })



const values = coding.forEach(function(item){
    console.log(item);
    return item
})

console.log(values); // undefined since forEach does not return anything BRUH.

const myNums = [1,2,3,4,5,6,7,8,9,10]

// arr =myNums.filter(function(val){
//     if(val > 5) return val;
// })

// const arr = myNums.filter( (val) => val > 4)




console.log(arr);