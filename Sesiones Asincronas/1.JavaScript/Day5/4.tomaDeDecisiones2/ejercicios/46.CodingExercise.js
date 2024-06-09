//Programe la función calcular, donde si el valor del parámetro cantidad es mayor a 10, 
// entonces la variable precio debe ser igual a 50 y en caso contrario (cantidad es menor 
// o igual a 10), la variable precio debe ser igual a 80.

let precio = 0;

function calcular(cantidad) {
    if(cantidad > 10){
        precio = 50;
    }else{
        precio = 80;
    }
}