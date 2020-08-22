// Función de manera tradicional.
function saludar() {
    console.log('Hola Mundo');   
}
// saludar();
//
// Funciones Anónimas.
const saludar2 = function() {
    console.log('Hola Mundo!');
}
// saludar2();
//
const saludar3 = function( nombre ) {
    console.log('Hola ' + nombre);
}
// saludar3('Javier');
//
const saludar4 = function( nombre ) {
    console.log('Hola '+ nombre+ '!');
}
// saludar4( 'Javier' );

function saludar5(nombre) {
    console.log('Hola '+ nombre);
}
// saludar5('Javier')
// Esto solo funciona en las funciones tradicionales.
function saludar6( nombre ) {
    console.log( arguments );
    console.log('Hola Mundo');  
    return 10; 

    //Esto nunca se va a  ejecutar.
    console.log('Soy un código que no se ejecutará');
}
// const retornoDeSaludar = saludar6( 'Javier' );
// saludar6( 'Javier', 'atila', 123, true );
// console.log( retornoDeSaludar );

//  Funciones de flecha.
const saludarFlecha = () => {
    console.log('Hola Mundo desde Javascript!');
}
// saludarFlecha();

// Cuando se pasan los argumentos no es necesario agregar los parentesis.
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola '+ nombre);
}

// saludarFlecha2('Javito');

// Función Tradicional
function sumar(a, b) {
    return a + b;
}
console.log( sumar(1,2) );

// Como función de felcha.
const sumar2 = (a,b) => {
    return a + b;
}
console.log(sumar2(2,5))

// Como función de flecha resumida cuando solo es una linea.
const sumar3 = (a,b) => a + b;

console.log(sumar3(3,1));

//
function getAleatorio(){
    return Math.random();
}

console.log( getAleatorio() );

//  Tarea  transformar la funcion anterior a function de flecha en una linea.

const numeroAleatorio = () => Math.random();
console.log( numeroAleatorio() )