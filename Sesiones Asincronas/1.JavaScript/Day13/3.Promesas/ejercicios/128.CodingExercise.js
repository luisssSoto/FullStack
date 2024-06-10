// Programar la función getDatos() para que retorne una promesa (new Promise) 
// con el resultado de realizar una petición (utilizando XMLHttpRequest) sobre 
// la url que recibe como parametro. Segun el estado de la peticion, recordar 
// que se deben utilizar los métodos resolve (que devuelve el resultado de la peticion) 
// y el método reject (que devuelve el error).

function getDatos(url) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            else {
                reject("Error");
            }
        }
        xhr.send();
    })
}