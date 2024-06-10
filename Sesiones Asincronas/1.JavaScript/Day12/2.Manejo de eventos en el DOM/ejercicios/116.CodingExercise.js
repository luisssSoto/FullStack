// Dado el código HTML proporcionado, programar la función agregarEvento() del 
// archivo script.js, que agregue un evento click al enlace miLink. Al dispararse 
// el evento, se debe cancelar la funcionalidad asociada utilizando la variable 
// event y la función preventDefault.
function agregarEvento() {
    let ancleElement = document.getElementById('miLink');
    ancleElement.addEventListener('click', function(event){
        event.preventDefault();
        alert('Enlance no habilitado');
    })
}