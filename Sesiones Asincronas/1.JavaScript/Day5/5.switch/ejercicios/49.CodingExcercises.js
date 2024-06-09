// Programa la función mostrar, en donde según el parámetro opcion 
//(cuyo valor es de tipo número) muestre un mensaje en un alert de la siguiente forma:

// Si el parámetro opcion es igual a 1 mostrar "Buenos días"
// Si el parámetro opcion es igual a 2 mostrar "Buenas tardes"
// Si el parámetro opcion es igual a 3 mostrar "Buenas noches"

function mostrar(opcion) {
    opcion = Number(opcion);
    switch(opcion){
        case 1:
            alert('Buenos días');
            break;
        case 2:
            alert('Buenas tardes');
            break;
        case 3:
            alert('Buenas noches');
            break;
    }   
}