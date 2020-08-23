

class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor(nombre = '') {
        if(!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Bruce Wayne');
const instancia2 = new Singleton('Clark Kent');
console.log(`Nombre en la instancia1: ${ Singleton.instancia.nombre }`);
console.log(`Nombre en la instancia2: ${ Singleton.instancia.nombre }`);