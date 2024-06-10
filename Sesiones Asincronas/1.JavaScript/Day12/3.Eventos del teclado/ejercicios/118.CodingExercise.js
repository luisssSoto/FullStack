// Dado el código HTML proporcionado, programar la función agregarEvento() del 
// archivo index.js, que agregue un evento keydown al input miInput. Al disparar 
// el evento, deberá validar que el usuario no pueda ingresar en el input la barra 
// espaciadora si la presiona. El número key de la barra espaciadora es 32.
function agregarEvento() {
    let inputElement = document.getElementById('miInput');
    inputElement.addEventListener('keydown', function(event){
        if(event.key == 32){
            event.preventDefault();
            alert('No puedes presionar dicha tecla')
        }
    })   
}