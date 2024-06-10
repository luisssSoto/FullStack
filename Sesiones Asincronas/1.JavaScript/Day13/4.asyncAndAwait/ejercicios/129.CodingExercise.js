// Utilizando las palabras claves async y await, convertir la función request(url) 
// en una función asíncrona (que simule sincronia) y que utilizando fetch, 
// realice una petición a la variable url y retorne el resultado de la petición 
// en formato json.

async function request(url) {
       let respuesta =  await fetch(url);
       let datos = await respuesta.json(); 
       return datos;
}