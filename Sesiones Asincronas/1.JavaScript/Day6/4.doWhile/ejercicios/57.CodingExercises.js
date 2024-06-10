// Implemente en la función testLoop, un Loop Do While que imprima en la consola 
// la tabla de multiplicar (del 1 al 10) del numero pasado por parámetro. 
// Es decir, que si por parámetro se pasa el numero 8, en la consola se debe imprimir:
// 8
// 16
// 24
// ...
function testLoop(numero) {
    let contador = 1;
    do{
        console.log(numero * contador);
        contador ++;
    }
    while(contador <= 10);
}

testLoop(8);