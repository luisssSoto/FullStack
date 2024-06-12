// Desarrolla la función agregarRegistro, donde utilizando la herramienta fetch 
// realice una solicitud PUT al servidor con URL 
// https://api.restful-api.dev/objects/[id] para modificar un registro existente en la API. 
// Debe utilizar el parámetro identificador que recibe la función para reemplazar el campo 
// [id] de la URL. Para construir el campo body de la petición, solo queremos modificar el 
// atributo name del elemento, así que solo debemos incluir este campo del objeto en el body. 
// Al este, se le debe asignar el parámetro nombre de la función.

// El resultado de la petición será un objeto JSON con los datos del registro modificado. 
// Esta respuesta se debe imprimir en consola.

async function agregarRegistro(identificador, nombre) {
    try{
        let respuesta = await fetch(identificador, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nombre,
            })
        })
        if(!respuesta.ok){
            throw new Error('No se pudo completar la solicitud PUT debido a: ' + respuesta.statusText);
        }
        let data = await respuesta.json();
        console.log('Respuesta satisfactoria: ' + data)
    } catch (error) {
        console.log(error);
    }
}