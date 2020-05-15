const para = document.querySelector('p');
console.log(para);

const px = document.querySelector('div.error');
console.log(px);

const py = document.querySelector('body > h1');
console.log(py);

const paras = document.querySelectorAll('p');
console.log(paras);

const pxy = document.querySelectorAll('p');
pxy.forEach(pxy =>{
    console.log(pxy);
})
console.log(pxy[1]);


const y = document.querySelectorAll('p');
const x = document.querySelectorAll('.error');

console.log(x);

// get an element by ID ////////////////////////////////////////////////

const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name //////////////////////////////////////
const errores = document.getElementsByClassName('error');
console.log(errores);
console.log(errores[0]);
/*errores.forEach(error =>{
    console.log(error);
})*/


// get elements by their tag name ///////////////////////////////////////////
const s = document.getElementsByTagName('p');
console.log(s);
console.log(s[1]);

// ///////////////////////////////////////////////////////////////////////////
const o = document.querySelector('p');
console.log(o.innerText);
o.innerText = "excelente";

const z = document.querySelectorAll('p');

z.forEach(o =>{
    console.log(o.innerText);
    o.innerText+='nuevo texto';
});

/*const content = document.querySelector('.content');
console.log(content.innerHTML);*/