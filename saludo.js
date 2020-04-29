//string
console.log ('prueba1');

let email= 'teccris21@gmail.com'
console.log(email);

//string concatenation
let firstName='Cristian';
let lastName= 'Padron';

let fullName= firstName+ '' +lastName;
console.log(fullName);

//getting chacarters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result =fullName.toLocaleLowerCase();
console.log(result, fullName);  

let index= email.indexOf('@');
console.log(index);

let radio= 10;
const pi= 3.14; 
//console.log(radio, pi);

//let result= pi*radio**2

//order of operatio - B I D M A S
let result2= 5*(10-30)**2;
console.log(result2);

let likes= 10;

//likes=likes+1;
//likes++;
//likes--;
//likes+=35;
//likes-=15;
//likes*=2;
likes/=2;
console.log(likes);

// NaN - not a number

console.log(5/'hola');
console.log(5*'hola');

let result3 = 'the blog has '+likes+' likes';
console.log(result3);

// template string
const title = 'Mejor lectura del 2020';
const author= 'Cristian';
const x = 30;

//concatenation way
let result4 = 'the blog called' +title+' by '+author+' has '+x+' likes';
console.log(result4);

//template string way 
let result5= `The blog called ${title} by ${author} has ${x} likes`;
console.log(result5);

//creating html templates
let html =`
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span> This blog has ${x} likes</span>
`;
console.log(html);