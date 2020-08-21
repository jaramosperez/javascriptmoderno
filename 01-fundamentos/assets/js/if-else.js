












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

// Sin usar If Else, o Switch, únicamente objetos
dia = 3; // 0:domingo, 1: lunes....

// const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}


console.log( diaSemana[dia] || 'Día no definido');