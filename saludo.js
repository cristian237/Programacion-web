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

let computers = ['HP', 'DELL', 'LENOVO', 'LG'];
//computers[1]= 'TOSHIBA';
console.log(computers[1]);

let ages = [20, 30, 40];
console. log(ages[2]);

let random = ['HP','INTELL', 45, 89, 103];
console.log(random);

console.log(computers.length);

//array methods ///////////////////////////////
/*let result6 = computers = computers.join('*');
console.log(result6);*/

let result7 = computers.indexOf('HP');
console.log(result7);

let result8 = computers.concat(['One', 'Twno']);
console.log(result8);

let result9 = computers.push('Apple');


/*Muestra qué número de objeto es "Four" y no qúe lugar ocupa*/
console.log(result9);

/*Muestra todos los objetos que están dentro del arreglo,
los objetos originales junto con el objeto "Four" agregado*/
console.log(computers);

result9 = computers.pop();
console.log(result9);

// bollean and comparisons ////////////////////////////
console.log(true, false, "true", "false");

//Methods can erturn booleans ////////////////////////
let email2 = 'ejemplo2@gmail.com';
let names = ['Juan', 'Cristian', 'alexis'];

let resul10 = email2.includes('!');
let result10 = names.includes('Cristian'); 
console.log(result10);

//Comparison operators //////////////////////////////
let edad2 = 23;
console.log( edad2 == 23);
console.log(edad2 == 25);
console.log(edad2 != 25);
console.log( edad2>20);
console.log(edad2>20);
console.log(edad2<=23);
console.log(edad2 >= 23);

let names2 = 'Jhoana';
console.log(names2 == 'Jhoana');
console.log(names2 =='jhoana');
console.log(names2 > 'Sandra');
console.log(names2 > 'jhoana');
console.log(names2 > 'Sandra');


let edad3 = 30;

// loose comparison (different types can still be equal) ////////////
console.log(edad3 != 30);
console.log(edad3 != '30');

//strict comparison (different types cannot be equal) ///////////////

console.log(edad3 === 30);
console.log(edad3 === '30');
console.log(edad3 !== 30);
console.log(edad3 !== '30');

// type conversion //////////////////////////
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result11 = Number('saludo');
console.log(result11);

let result12 = String(50);
console.log(result12);

let result13 = Boolean(100);
console.log(result13, typeof result13);

let result14 = Boolean('0');
console.log(result14, typeof result14);
