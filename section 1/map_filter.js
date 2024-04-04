const nums = [4 , 8 , 3 , 1 , 6 , 9];

const newNums =[];
for(let n of nums){
    // console.log(n ** 3);
    newNums.push(n ** 3);
}

console.log(newNums);

const newArr = nums.map( (a) => { return a*2 } );
console.log(newArr);

const names =["Sneha" , "Ravi" , "Parul" , "Bhavi" , "Muskan"];

// console.log( 'abc'.toUpperCase() );
 
console.log( 'abc'.toUpperCase() );
const upperCaseName = names.map( (n) => { return n. toUpperCase() } );

console.log(upperCaseName);

  const evenNums = nums.filter((n) => { return n% 2===0 });
  console.log(evenNums);

  const prices = [530, 990, 2880, 3200, 800, 120];
  // 800 < price < 1500

  const budgetPrices = prices.filter((n) => { return n. lenght > 4} );
  console.log(longNames);

  const strPrices = ['₹56.90', '₹780.892','₹190.6', '₹90.8','₹120.9'];
  //56, 780, 190, 90, 120]

  console.log(pareseInt('₹67.82'.slice(1)));
  const numPrices = strPrices.map ((n)) =>{ return parseInt(n.slice(1))};
  console.log(numPrices);

  
  
  
  
  