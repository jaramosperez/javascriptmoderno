class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }


    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
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

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase); // Super siempre debe ir primero
        this.clan = 'Los Vengadores';
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre }, ${ this.clan }`)
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Yo soy tu amigable vecino spiderman');

console.log(spiderman);