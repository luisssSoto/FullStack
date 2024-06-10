// Dado el código HTML proporcionado, programar la función agregarEvento() del 
// archivo index.js, que agregue un evento mouseout al boton miBoton. Al disparar 
// el evento, deberá imprimir en consola el mensaje: Mouse por fuera de botón

function agregarEvento() {
    let butonElement = document.getElementById('miBoton');
    butonElement.addEventListener('mouseout', function(){
        console.log('Mouse por fuera de botón');
    })
}