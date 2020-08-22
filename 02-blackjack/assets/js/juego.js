(() => {
    'use strict'

    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0, 
        puntosComputadora = 0;

    // Referencias del HTML
    const btnNuevo   = document.querySelector('#btnNuevo')
    const btnPedir   = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');


    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas') 

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

    // Esta Funcion permite sacar el valor de la carta.
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

    // Turno de la Computadora
    const turnoComputadora = ( puntosMinimos ) => {
        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHTML[1].innerText = puntosComputadora;


            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add( 'carta' );
            divCartasComputadora.append( imgCarta );

            if (puntosMinimos > 21) {
                break;
            }

        } while ( (puntosComputadora < puntosJugador) && (puntosMinimos <= 21 ));
        // Mensajes de ganadores.
        setTimeout(() => {
            if(puntosComputadora === puntosMinimos){
                alert('NADIE GANA');
            }else if (puntosMinimos > 21 ) {
                alert('COMPUTADORA GANA');
            }else if ( puntosComputadora >21) {
                alert('JUGADOR GANA');
            }else{
                alert('COMPUTADORA GANA');
            }
            
        }, 50);
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
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            
            turnoComputadora( puntosJugador );
        } else if ( puntosJugador === 21 ){
            btnPedir.disabled   = true;
            btnDetener.disabled = true;

            turnoComputadora( puntosJugador );
        }

    } );

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );

    });

    btnNuevo.addEventListener('click', () => {

        console.clear();

        deck = [];
        deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    });


})();






