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