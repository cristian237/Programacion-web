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
    
// if statements //////////////////////////////////////////////////
const edad = 25;

if(edad > 20){
    console.log('you are over 23 years old');
}

const soda = ['coca-cola', 'sprite', 'penafiel', 'Pepsi'];

if(soda.length > 3){
    console.log("that's a lot of soda");
}

const password = 'p@ssword';

if(password.length >= 8){
    console.log('that password is log enough!');
}

const password2 = 'p@ass';

if(password2.length >= 12){
    console.log('that password is might strong');
}

else if(password2.length >= 8){
    console.log('that password is long enough!');
} else {
    console.log('that password is not long lough!');
}

// logical operators - OR || and AND && /////////////////////////////

const password3 = 'password1234';

if(password3.length >= 12 && password3.includes('@')){
    console.log('1');
} else if(password3.length >=8 || password3.includes('a') && password3.length >5){
    console.log('2');
} else {
    console.log('3');
}

// logical NOT(!) ////////////////////////////////////////////

let user = false;

if(!user){
    console.log('example negative')
}
console.log(!true);
console.log(!false);

// break and continue ///////////////////////////////////////

const score = [50, 30, 25, 58, 75, 7, 0];

for(let i=0; i<score.length; i++){
    console.log('tu marcador; ', score[i]);

if(score[i] === 0 ){
    continue;
}

console.log('su marcador es: ', score[i]);

if(score[i]=== 100){
    console.log('your score');
    break;
}

}

// switch statements ///////////////////////////////////////
const grade = 'G';

switch(grade){
    case 'A':
        console.log('letra A');
        break;
    case 'B':
        console.log('letra B');
        break;
    case 'C':
        console.log('letra C');
        break;
    case 'D':
        console.log('letra D');
        break;
    case 'E':
        console.log('letra E');
        break;
    default:
        console.log('not a valid grade');

}

// variables and block scope ////////////////////////////////

const age = 30;
const names5= 'Crsitian';

if(true){
    const age = 40;
    const names5 = 'Cristian';
    console.log('inside 1st code block: ', age, names5);

    if(true){
        const age = 50;
        console.log('inside 2st code block: ', age);
        var test= 'hola';
    }
}

console.log('outside code block: ', age, names5, test);
