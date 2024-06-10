// Dentro de la función testLoop(), implemente un Loop For cuya variable x asociada 
// este inicializada en 1 y la condicion que se debe cumplir para que el ciclo se 
// siga ejecutando es que dicha variable sea menor a 5. Esto quiere decir, que el 
// ciclo va a cumplir con 4 vueltas (iteraciones).

// En cada vuelta del ciclo, se debe ir acumulando en la variable suma, el valor de 
// la variable x. Ten en cuenta que estamos diciendo "acumular", lo que significa que 
// debes sumar el valor que ya contiene la variabla suma, más el valor de x y ese 
// resultado asignarlo a suma.

let suma = 0;

function testLoop() {
   for(let x = 1; x < 5; x ++){
    suma += x;
   }
}