//filter and forEach dono applies a function to array / object
// filter return a new array with the specified condition whereas forEach does not return a new array.


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (val) =>{
    return val.edition > 2000;
  })

  console.log(userBooks);

  const myNums = [1,2,3,4,5,6,7,8,9,10]


// map() will apply some operation to all the elements of an array whereas 
// filter() will return a subset of the array following some conditions
  const newNums = myNums.map( (num) =>{
       return num + 10
  })

  const newNums2 = myNums.map( (val) => val*10).filter((val) => val <=50).map( (val) => val * 100)

// const newNums = myNums.filter( (val) =>{
//     return val + 10;
// });

  console.log(newNums2);