const smartphoneList =[
    
    { brand : 'Samsung', model : 'S24', price : 120000, colors : ['white', 'black', 'blue'] },
    { brand : 'Apple', model : 'iPhone 15', price : 150000, colors : ['black', 'blue'] },
    { brand : 'Oneplus', model : 'nord ce 3', price : 20000, colors : ['grey', 'white'] },
    { brand : 'Redmi', model : 'note 8 Pro', price : 16000, colors : ['blue', 'white'] },
    { brand : 'Samsung', model : 'Z fold', price : 164000, colors : ['white '] },
];
// find phones with price less than 50000

  const budgetPhones = smartphoneList.filter ((phone) => { return phone.price < 50000} );
  console.log(budgetPhones);
  // filter all samsung phones

   const samsungPhones = smartphoneList .filter (( phone) => { return phone.brand  === 'samsung'} );
  console.log(samsungPhones);
  const bluePhones = smartphoneList.filter ( ( phone) => { return phone.colors.include.blue} );
  console.log(bluePhones);

  // create an array  of phone models
  // create an array  of phone brands
   // ['524' 'iPHONE 15' 'nord ce 3' 'note 8 pro' '2 fold]
   const model = smartphoneList.map( (phone) => { return phone.model } );
   console.log(model);
   const brand = smartphoneList.map( (phone) => { return phone.brand } );
   console.log(new Set(brand));

