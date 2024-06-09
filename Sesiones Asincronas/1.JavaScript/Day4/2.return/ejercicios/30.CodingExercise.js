// Declarar la función obtenerFecha(), la cual debe obtener la fecha actual en formato 
// DD/MM/YYYY (utilizar la función toLocaleDateString('es-ES') del objeto Date) y 
// retornarla para que la función mostrarFecha la utilice.

function mostrarFecha() {
    alert(obtenerFecha());
}

function obtenerFecha(){
    let currentDate = new Date();
    return currentDate.toLocaleDateString('es-ES');
}