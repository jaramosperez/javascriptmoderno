let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje);
console.log( 'Nombre ', personaje.nombre);
console.log( 'Nombre ', personaje['nombre']);
console.log( 'Edad', personaje.edad);
console.log( 'Coors', personaje.coords);
console.log( 'Lat ', personaje.coords.lat);
console.log( 'Ironman tiene ', personaje.trajes.length, ' trajes.' );
console.log( 'Último Traje', personaje.trajes[ personaje.trajes.length-1 ]);

const x = 'vivo';
console.log('Vivo', personaje[ x ] );

// Para Borrar una propiedad
delete personaje.edad;
console.log(personaje);
// Pares de valores

const entriesPares = Object.entries( personaje );
console.log( entriesPares );
//
Object.freeze( personaje );

personaje.casado    = false;
personaje.dinero    = 10000000;
personaje.direccion.ubicacion = 'Chile';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ propiedades, valores });

