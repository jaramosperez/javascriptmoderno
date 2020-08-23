
// Se hacia de esta forma en navegadores antiguos, ya no mas.
function Persona( nombre, edad ) {
    console.log('Se ejecutó esta línea');
    
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
const claudia = new Persona('Claudia', 30);

maria.imprimir();
claudia.imprimir();