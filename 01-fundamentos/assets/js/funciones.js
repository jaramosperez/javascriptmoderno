// Función de manera tradicional.
function saludar() {
    console.log('Hola Mundo');   
}

saludar();

//
// Funciones Anónimas.
const saludar2 = function() {
    console.log('Hola Mundo!');
}


saludar2();
//

const saludar3 = function( nombre ) {
    console.log('Hola ' + nombre);
}

saludar3('Javier');
//
const saludar4 = function( nombre ) {
    console.log('Hola '+ nombre+ '!');
}
saludar4( 'Javier' );

function saludar5(nombre) {
    console.log('Hola '+ nombre);
}

saludar5('Javier')

// Esto solo funciona en las funciones tradicionales.
function saludar6( nombre ) {
    console.log( arguments );
    console.log('Hola Mundo');   
}

saludar6('Javier', 'atila', 123, true);

//  Funciones de flecha.
const saludarFlecha = () => {
    console.log('Hola Mundo desde Javascript!');
}

saludarFlecha();

// Cuando se pasan los argumentos no es necesario agregar los parentesis.
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola '+ nombre);
}

saludarFlecha2('Javito');