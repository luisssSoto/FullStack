//Los callbacks son funciones que se utilizan en la programacion asicrona

function funcionPrincipal(callback){
    console.log('Yo soy la funcion principal \n mandare a llamar al callback');
    callback();
};

function funcionCallback(){
    console.log('Hola yo soy la funcion Callback')

};

funcionPrincipal(funcionCallback);
console.log()

//Ejemplo
function avanzaFila(callback){
    setTimeout(function(){
        console.log('Tu turno ha llegado');
        callback();
    }, 5000);
}

function mujerTeLlama(){
    console.log("Te presentas a tu turno");
}

console.log('Llegas a la fila');
avanzaFila(mujerTeLlama);
console.log('Te vas a comprar cafe');
