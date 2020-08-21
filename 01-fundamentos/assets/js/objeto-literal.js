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
    dirección: {
        zip: '10880, 90265',
        ubicación: 'Malibu, California'
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