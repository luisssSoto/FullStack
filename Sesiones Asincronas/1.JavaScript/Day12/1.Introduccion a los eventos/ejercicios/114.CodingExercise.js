// Dado el código HTML proporcionado, programar la función agregarEvento() del 
// archivo script.js, que agregue un evento click al boton miBoton. 
// Al disparar el evento, deberá mostrar en un alerta el mensaje: Click realizado


function agregarEvento() {
    let buttonElement = document.getElementById('miBoton');
    buttonElement.addEventListener('click', function(){
        alert('Click realizado');
    })
}