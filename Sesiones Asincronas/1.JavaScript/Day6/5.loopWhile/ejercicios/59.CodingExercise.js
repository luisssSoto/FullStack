// Implementar la funcion testLoop, utilizando un Loop While cuya condición verifique
//  que el ciclo itere mientras el parámetro sea menor a 10. Mientras eso suceda, 
//  en cada ciclo se deberá imprimir en consola el valor actual del parametro y 
//  luego incrementar el valor del parametro en uno.

function testLoop(parametro) {
    while(parametro < 10){
        console.log(parametro);
        parametro += 1;
    }   
}