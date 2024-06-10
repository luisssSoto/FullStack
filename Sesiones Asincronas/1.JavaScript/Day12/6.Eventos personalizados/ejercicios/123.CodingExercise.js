// Dado el código HTML proporcionado y la función agregarEvento() del script.js ya 
// desarrollada, se pide agregar el contenido necesario para crear un evento 
// personalizado una vez que se dispare el evento click del botón miBoton, y 
// asignar este evento al mismo botón. Al disparar el evento personalizado, se 
// debe imprimir en consola el mensaje: "Boton presionado"


function agregarEvento() {
    let boton = document.getElementById('miBoton');

    boton.addEventListener('click', function() {
        let newEvento = new CustomEvent('mostrar');
        boton.dispatchEvent(newEvento);
    
    });
    boton.addEventListener('mostrar', function(){
        console.log('Boton presionado')
    })
}
agregarEvento();


