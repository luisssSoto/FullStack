// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo 
// script.js, que agregue un evento click al boton miBoton. Al disparar el evento, 
// deberá imprimir en consola el mensaje: Boton presionado
function agregarEvento() {
    let buttonElement = document.getElementById('miBoton');
    buttonElement.addEventListener('click', function(){
        console.log('Boton presionado');
    })

}