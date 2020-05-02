// for loops //////////////////////////////////////

for(let i = 0; i<5; i++){
    console.log('in loop:', i);
}

console.log ('loop finished');

const nombres = ['Cristian', 'Alexis', 'Padron'];

for(let i = 0; i < nombres.length; i++){
    console.log(i);
    console.log(nombres[i]);
}

/*for(let x = 0; x < nombres.length;xi++){
    let html = `<div>${nombres[x]} </div>`;
    console.log(html);

    
}*/

for(let y = 0; y < 5; y++){
    console.log('Example one: ', y);
}
console.log('Example one finished');

let a = 0;

while(a < 5){
    console.log('Example two; ', a);
    a++;
}
console.log('Example two finished');

const names3 = ['Ana', 'Laura', 'Cassandra'];

let b = 0;
while(b <names3.length){
    console.log(names3[b]);
    b++;
}

// do while loops //////////////////////////////////////////////////

let c = 0;

do{
    console.log('val of c is ', c);
    c++;
} while(c<5)