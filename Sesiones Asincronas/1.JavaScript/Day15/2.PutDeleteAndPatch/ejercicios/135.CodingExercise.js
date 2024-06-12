// Desarrolla la función agregarRegistro, donde utilizando la herramienta fetch 
// realice una solicitud DELETE al servidor con URL 
// https://api.restful-api.dev/objects/[id] para eliminar un registro existente en la API. 
// Debe utilizar el parámetro identificador que recibe la función para reemplazar el campo 
// [id] de la URL.

// El resultado de la petición será un mensaje informando que el elemento fue eliminado 
// correctamente. Esta respuesta se debe imprimir en consola.

function agregarRegistro(identificador) {
    fetch('https://api.restful-api.dev/objects/'+identificador, {
        method: 'DELETE',
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ' + error));

}