/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diaminds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, 
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');

// Esta función crea un nuevo Deck.
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    // Ingreso de Cartas especiales.
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    //console.log( deck ); // Ordenado
    deck = _.shuffle(deck); // Baraja los elementos al azar.
    console.log(deck);
    return deck;
}

crearDeck();


// Esta Función me permite tomar una carta
const pedirCarta = () => {
    if( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    //console.log(deck); // deck sin la carta en la baraja.
    //console.log(carta); // Carta debe ser de la baraja
    return carta;
}


const valorCarta = (carta) => {

    const valor = carta.substring( 0, carta.length -1 )
    return(isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
    // if( isNaN( valor ) ) {
    //     puntos = (valor === 'A') ? 11 : 10 
    // } else {
    //     puntos = valor * 1;
    // }
}

// const valor = valorCarta( pedirCarta() );
// console.log({ valor });
// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    console.log( puntosJugador );

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );


    if( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }

} )