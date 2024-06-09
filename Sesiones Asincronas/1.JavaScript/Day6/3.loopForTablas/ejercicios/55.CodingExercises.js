// Implemente en la función testLoop, un Loop For que imprima en la consola la tabla 
// de multiplicar (hasta el 10) del numero pasado por parámetro. Es decir, que si por 
// parámetro se pasa el numero 8, en la consola se debe imprimir:

// 8
// 16
// 24
// ...

function testLoop(numero) {
    for(let x = 1; x < 11; x ++){
        console.log(numero * x);
    }
}
testLoop(8);