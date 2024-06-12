// Desarrolla la función agregarRegistro, donde utilizando la herramienta fetch 
// realice una solicitud POST al servidor con URL 
// https://api.restful-api.dev/objects para agregar un nuevo registro a la API. 
// Para construir el campo body de la petición, los campos del objeto que la API 
// espera son name y data, a los cuales se le deben asignar los parámetro de la 
// función, nombre y datos, respectivamente.

// El resultado de la petición será un objeto JSON con los datos del nuevo registro. 
// Esta respuesta se debe imprimir en consola.
async function agregarRegistro(nombre, datos) {
    try {
        let respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: nombre,
                data: datos,
            }),
        })
        if(!respuesta.ok){
            throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }
        let data = await respuesta.json();
        console.log('registro creado: ' + data);
    } catch (error) {
        console.log('Algo salio mal: ' + error)
        
    }
    
}
