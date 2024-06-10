// Muestre en un alert, la fecha del dia de hoy con el formato DD/MM/YYYY. 
// Para ello debe usar la función toLocaleDateString('es-ES') que proporciona el 
// objeto Date.

function mostrarFecha(){
    let currentDate = new Date();
    currentDate = currentDate.toLocaleDateString('es-ES');
    alert(currentDate);
}
