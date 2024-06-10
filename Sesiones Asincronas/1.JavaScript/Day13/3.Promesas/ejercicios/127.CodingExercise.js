// Dentro de la función test, asignar a la variable promesa, un nuevo objeto 
// Promise (promesa) que según la variable resultado (boolean), si la misma 
// es true, llame al método resolve pasando el parámetro "Correcto" y en caso 
// contrario (false), llamar al método reject pasando el parámetro "Error".

let promesa;

function test(resultado) {
    promesa = new Promise(function(resolve, reject){
        if(resultado === true){
            resolve = 'Correcto';
        }else{
            reject = "Error";
        }
    })
}
