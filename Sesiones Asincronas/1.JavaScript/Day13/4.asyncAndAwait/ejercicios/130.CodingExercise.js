// Utilizando las palabras claves async y await, transformar el código de la 
// función request(url) en una función asíncrona que simule ser sincrona.
async function request(url) {
    return await fetch(url).then(function(respuesta) {
        return respuesta.json();
    });
}