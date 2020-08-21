const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación')
console.log(true); //true
console.log(!true); //false
console.log(false); //false
console.log(!false); //true

console.log( !regresaFalse) // true

console.warn('And'); //True si todos sus valores son verdaderos
console.log(true && true) //true
console.log(!false && true) // true

console.log('=============');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.log('===== && ======');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true &&  true && true && false);

console.warn( 'OR' ); // true
console.log( true || false );
console.log( false || false );

console.log(regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || false || true);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = undefined;

const a1 = true && 'Hola Mundo' && 150; //

console.log({a1, });