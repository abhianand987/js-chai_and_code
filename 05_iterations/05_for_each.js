// most widely used

const coding = ['cpp' , 'js' , 'c' , 'python']

// coding.forEach( function(val){
//     console.log(val);
// })

coding.forEach( (item) =>{
    console.log(item);
}) // simply prints above array

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
//callbackfn me fn ka reference dena hai just and execute ni krwana hai BRO

// coding.forEach() for each has --> item , index , array

coding.forEach( (item , indx , arr) => {
     console.log(item , indx , arr);
})

const myCoding = [
    {
        lang : 'js',
        ver : 5
    } ,
    {
        lang : 'cpp',
        ver : 3
    }
    ,
    {
        lang : 'python',
        ver : 6
    }
]

myCoding.forEach(  (item , indx , arr) =>{
      console.log(item.lang , indx , arr);
})