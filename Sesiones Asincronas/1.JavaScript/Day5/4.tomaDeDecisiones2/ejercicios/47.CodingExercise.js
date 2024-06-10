// En base al ejercicio anterior, programe ahora la función calcular para definir 
// la siguiente lógica.

// Si la cantidad es mayor a 10, la variable precio debe ser igual a 50.

// Si la cantidad es menor a 5, la variable precio debe ser igual a 100.

// Entre 5 y 10, el precio debe ser igual a 80.

let precio = 0;

function calcular(cantidad) {
    if(cantidad > 10){
        precio = 50;
    }else if (cantidad < 5) {
        precio = 100;
    } else {
        precio = 80
    }
}