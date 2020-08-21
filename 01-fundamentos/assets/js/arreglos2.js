let juegos = [ 'Zelda', 'Mario', 'Pacman', 'Metroid' ];
console.log( 'Largo: ', juegos.length );

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];
console.log(primero, ultimo)


juegos.forEach( (elemento, indice, arr) => {
    console.log( elemento, indice, arr);
});

let nuevaLongitud =  juegos.push('Castlevania');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos});

let eliminado = juegos.pop();
console.log( {eliminado, juegos});

let pos = 1;

let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos })

let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });




// TODO: Pasar datos por referencia o valor.