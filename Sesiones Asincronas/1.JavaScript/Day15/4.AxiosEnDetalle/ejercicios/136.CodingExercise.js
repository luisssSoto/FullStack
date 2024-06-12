// Desarrolla la función consultarElementos, donde utilizando la herramienta axios 
// realice una solicitud GET al servidor con URL 
// https://api.restful-api.dev/objects para consultar todos registros almacenados en la API.
// El resultado de la petición será un objeto JSON con todos los elementos y sus datos. 
// Esta respuesta se debe imprimir en consola.

const { default: axios } = require("axios");

function consultarElementos() {
    axios.get('https://api.restful-api.dev/objects', datos)
    .then(response => console.log('Respuesta: ', response.data))
    .catch(error => console.error('Error:', error))
}