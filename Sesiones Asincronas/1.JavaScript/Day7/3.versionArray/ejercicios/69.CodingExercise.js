// En la función ya declarada, calcule el promedio de notas del array e imprima en 
// consola el resultado del calculo realizado

let notas = [6, 9, 7, 5, 1, 5, 4, 3];
function promedio() {
    let suma = 0;
    for(let numero of notas){
        suma += numero;
    }
    console.log(suma / notas.length)
}

promedio();