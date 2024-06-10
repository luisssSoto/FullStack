// En primer lugar, se solicita lanzar un error (new Error) si el numero es igual 
// a 0 en la función tablaDelCinco(). Además, programar la función manejarErrores(), 
// que utilizando un bloque try catch llame a la función tablaDelCinco() utilizando 
// la palabra clave await. Si se genera un error (es decir que el catch captura ese 
// caso) imprimir en consola (utilizando console.error) el mensaje de error, y 
// en caso contrario imprimir en consola el resultado de la función tablaDelCinco().
async function tablaDelCinco(numero) {
    if(numero === 0) {
        throw new Error("Error de calculo");
    }
    else {
        return 5*numero;
    }
}
 
async function manejarErrores() {
    try {
        let resultado = tablaDelCinco(0);
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}