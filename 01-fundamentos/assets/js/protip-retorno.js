// function crearPersona( nombre, apellido) {
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// const persona = crearPersona('Javier', 'Ramos');
// console.log( persona );

//
// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
// const persona = crearPersona('Javier', 'Ramos');
// console.log( persona );

//
// const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });
// const persona = crearPersona( 'Javier', 'Ramos' );
// console.log( persona );


// function imprimeArgumentos() {
//     console.log( arguments );
// }

// const imprimeArgumentos2 = (edad, ...args) => {
//     //console.log( {edad, args} );
//     return args;
// }

// const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Javier', 'Ramos');
// console.log({ casado, vivo, nombre, saludo })
// //imprimeArgumentos2(10, true, false, 'Javier', 'Ramos');

// const { apellido: nuevoApellido } = crearPersona('Javi', 'Ramos');
// console.log({ nuevoApellido })

// desestructuración de Argumentos.

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V', 'Hulkbuster']
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'trajes', personaje.trajes );
// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony)