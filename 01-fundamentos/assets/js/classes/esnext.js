

class Rectangulo {

    #area = 0; // aun no implementado en todos los navegadores.

    constructor(base=0, altura=0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura
    }

    calcularArea(){
        console.log(this.#area);
    }
}

const rectangulo = new Rectangulo(10,15);
console.log(rectangulo);