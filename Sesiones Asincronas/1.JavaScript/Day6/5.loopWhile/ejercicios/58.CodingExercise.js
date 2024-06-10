// Implemente la función testLoop, donde debe utilizar un Loop While que itere 
// tantas veces como lo indique el parámetro vueltas y que imprima en la consola 
// en cada iteración el número de vuelta de la siguiente forma: Vuelta 0, Vuelta 1, 
// etc. Utilice la variable contador para ir contando la cantidad de vueltas que va 
// dando el ciclo.
function testLoop(vueltas){
    let contador = 0;
    while(contador <= vueltas){
        console.log('Vuelta ' + contador);
        contador ++;
    }
}
testLoop(10);