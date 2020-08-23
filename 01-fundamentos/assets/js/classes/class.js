

class Persona {
    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    //Set
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    //Get

    get getComidaFavorita() {
        return `La Comida favorita de ${ this.nombre } es ${ this.comida}`  
    }

    // Métodos
    quienSoy(){
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Yo soy tu amigable vecino spiderman');
const ironman   = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
console.log( spiderman.getComidaFavorita );