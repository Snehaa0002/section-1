const user = { name: 'sneha', email: 'sneha123@gmail.com', password: 'sneha0602' };
console.log(user.name);
console.log(user.email);
console.log(user['password']);
let key = 'name';

console.log(user[key]);

user.password = 'abrakadabra';
console.log(user);
user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'Samsung',
    model : 'S24',
    price : 149999,
    colors : ['white', 'black', 'green']
};

console.log(smartphone.price);
console.log(smartphone.colors[1]);

const smartphoneList =[
    
       { brand : 'Samsung', model : 'S24', price : 120000, colors : ['white', 'black', 'blue'] },
       { brand : 'Apple', model : 'iPhone 15', price : 150000, colors : ['black', 'blue'] },
       { brand : 'Oneplus', model : 'nord ce 3', price : 20000, colors : ['grey', 'white'] },
       { brand : 'Redmi', model : 'note 8 Pro', price : 16000, colors : ['blue', 'white'] },
        { brand : 'Samsung', model : 'Z fold', price : 164000, colors : ['white '] },
]

console.log(smartphoneList.length);
console.log(smartphoneList[0].model);
console.log(smartphoneList[0].price);
console.log(smartphoneList[0].colors[1]);


smartphoneList[4].colors.push('red');
console.log(smartphoneList[4]);

