// Implementar en la función testLoop, un Loop For Of que recorra miArray y en 
// cada vuelta del ciclo, vaya acumulando en la variable suma el valor de los 
// numeros contenidos en el array. Se pide acumular, lo que indica que debo sumar 
// el valor que ya contiene la variable suma, más el valor del elemento que estoy 
// recorriendo y ese resultado asignarlo a suma.

let miArray = [5, 9, 6, 4, 8];
let suma = 0;

function testLoop() {
    for(let numero of miArray){
        suma += numero;
    }
}