// En primer lugar, se solicita llamar al método reject cuyo parámetro será un objeto 
// error (new Error) si el numero es igual a 0 en la función tablaDelCinco(). 
// Además, programar la función manejarErrores(), que deberá llamar a la función 
// tablaDelCinco y utilizando los elementos .then y .catch de la promesa resultante, 
// deberá imprimir en consola el resultado de la misma. Debe usar console.log y 
// console.error respectivamente.


function tablaDelCinco(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(numero === 0) {
                reject(new Error("Error"));
            }
            else {
                resolve(5*numero);
            }
        }, 1000);
    })
}
 
function manejarErrores() {
    tablaDelCinco(0)
    .then(function(respuesta) {
        console.log(respuesta);
    }).catch(function(error) {
        console.error(error);
    })
}