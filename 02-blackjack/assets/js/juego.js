(() => {
    'use strict'

    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');


    const divCartasJugador     = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'),
          puntosHTML = document.querySelectorAll('small');

    // Esta Función Inicializa el Juego.      
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        for( let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        console.log( puntosJugadores );
    }    

    // Esta función crea un nuevo Deck.
    const crearDeck = () => {

        deck = [];
        for ( let i = 2; i <= 10; i++ ) {
            for ( let tipo of tipos ) {
                deck.push( i + tipo );
            }
        }
        // Ingreso de Cartas especiales.
        for ( let tipo of tipos ) {
            for ( let esp of especiales ) {
                deck.push( esp + tipo );
            }
        }
        return _.shuffle( deck );
    }

    // Esta Función me permite tomar una carta
    const pedirCarta = () => {
        if( deck.length === 0 ){
            throw 'No hay cartas en el deck';
        }
        return deck.pop();;
    }

    // Esta Funcion permite sacar el valor de la carta.
    const valorCarta = (carta) => {

        const valor = carta.substring( 0, carta.length -1 )
        return(isNaN(valor)) ? 
                (valor === 'A') ? 11 : 10
                : valor * 1;
    }

     const acumularPuntos = () => {

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

        inicializarJuego();
        // deck = [];
        // deck = crearDeck();

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






