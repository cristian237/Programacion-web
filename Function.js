// Function declaration ///////////////////////////////////////
/*function greet(){
    console.log('hola, prueba de función')
} 

// function expression ///////////////////////////////////
const speak = function(){
    console.log('Adiós');
}

greet();

speak();
speak();
*/


// arguments and paraments //////////////////////////////////
const speak = function(name = 'Padron', x = 'tome asiento por favor'){
     console.log(`buen dia ${name}, ${x}`);
};

console.log(name);

speak();
speak('Cristian', 'bienvenido');

// returning values ///////////////////////////////////////
const calArea = function(radio){
    return 3.14 * radio**2;
    console.log(area);
   return area;
}

//calArea(5);

const area = calArea(5);
console.log(area);

// practise arrow functions ///////////////////////////////////////////
const bill = function(products, tax){
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));

const name2 = 'Example of names';

// function ////////////////////////////////////
const greet = () => 'hola';

let result = greet();
console.log(result);

// methods //////////////////////////////////////
let result2 = name2.toUpperCase();
console.log(result);

// callbacks and forech /////////////////////////////////////
const myFunc = (callbackFunc) =>{
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    // do something 
    console.log(value);
});

let gente = ['yo', 'tú', 'él', 'ella', 'nosotros'];

const cargarPersona = (person, index) => {
    console.log(`${index} - hola ${person}`);
}

gente.forEach((person, index) =>{
    console.log(index, person);
});

