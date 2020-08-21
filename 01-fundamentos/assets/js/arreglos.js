//const arr = new Array(10);
//const arr = [];
//console.log(arr);

let videoJuegos = [ 'Mario 3', 'Final Fantasy VI', 'Chrono Trigger', 'Xenoblade Chronicles'];
console.log({ videoJuegos });
console.log( videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Javier',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman',
    ]],
];

//console.log( arregloCosas );

console.log( arregloCosas[0] );
console.log( arregloCosas[2]);
console.log( arregloCosas[7][3]);
console.log( arregloCosas[7][4][1]);
