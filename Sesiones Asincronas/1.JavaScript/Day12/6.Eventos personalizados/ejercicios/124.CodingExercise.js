// Dado el código HTML proporcionado y la función agregarEvento() del script.js 
// ya desarrollada, se pide agregar el contenido necesario para crear un evento 
// personalizado una vez que se dispare el evento click de la etiqueta <a> miEnlace, 
// y asignar este evento al mismo elemento. Al disparar el evento personalizado, se 
// debe mostrar en un alert el mensaje: "Redireccion activada"

function agregarEvento() {
    let enlace = document.getElementById('miEnlace');

    enlace.addEventListener('click', function() {
        let newEvent = new CustomEvent('miEvento');
        enlace.dispatchEvent(newEvent)
    });

    enlace.addEventListener('miEvento',function(){
        alert("Redireccion activada");
    })
}
agregarEvento();