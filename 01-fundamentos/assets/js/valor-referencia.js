
// Paso por Valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b})

// Paso por referencia. 
// Ocupan el mismo espacio en memoria por lo tanto el cambio en uno afecta al otro.
let juan = { nombre: 'Juan'};

// Para solucionar esto debemos romper la relación que existe de la referencia.
// Usando el operador Spred
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiarNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony  = cambiarNombre( peter ); 

console.log({ peter, tony });

// Arreglos
// Rompiendo Relación.
const frutas = ['Manzana', 'Pera', 'Piña'];


console.time('slice');
const otrasFrutas = frutas.splice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [ ...frutas]; // primera Forma y mas rápida
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table( {frutas, otrasFrutas} );