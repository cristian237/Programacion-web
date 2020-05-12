// objects literals

const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {titles: '10 things to make with marmite', likes:50}
];

let user = {
    nombre:'Cristian',
    age: 23, 
    email: 'teccris21@gmail.com', 
    location:'Chetumal',
   blogs:['why mac & cheese rules', '10 things to make with marmite'],
   login: function(){
       console.log('the user logged in');
   },
   logout: function(){
       console.log('the user logged out');
   },
   logBlogs: function(){
       console.log(this);
   }
};

console.log(user);
console.log(user.nombre);
console.log(user.age)
console.log(user['email']);

user['nombre']='Alexis';
console.log(user['nombre']);

console.log(typeof user);

user.login();
user.logout();

const nombre = 'Padron';
nombre.toUpperCase();

user.logBlogs();
//console.log(user.logBlogs);
console.log(this);

// Math object ////////////////////////////////////////////////////

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const are= 7.7;

console.log(Math.round(are));
console.log(Math.floor(are));
console.log(Math.ceil(are));
console.log(Math.trunc(are));

// random numbers ///////////////////////////////////////////////////
const random = Math.random();

console.log(random);
console.log(Math.round(random*100));

// primitive values //////////////////////////////////////////////////

let marcadorUno = 50;
let marcadorDos = marcadorUno;

console.log(`marcadorUno: ${marcadorUno}`,`marcadorDos: ${marcadorDos}`);

marcadorUno = 100;
console.log(`marcadorUno: ${marcadorUno}`,`marcadorDos: ${marcadorDos}`);

// reference values ////////////////////////////////////////////////////////
const usuarioUno = {name2: 'Prueba1', edad2: 35};
const usuarioDos = {usuarioUno};

console.log(usuarioUno, usuarioDos);

usuarioUno.edad2 = 40;
console.log(usuarioUno, usuarioDos);
