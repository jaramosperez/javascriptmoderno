/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diaminds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck)
    return deck;
}

crearDeck();


// Esta Función me permite tomar una carta
const pedirCarta = () => {
    if( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(deck); // deck sin la carta en la baraja.
    console.log(carta); // Carta debe ser de la baraja
    return carta;
}

pedirCarta();