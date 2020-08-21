












const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia === 5) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('El día es Lunes');
} else if ( dia === 3) {
    console.log('El día es viernes');
}

//