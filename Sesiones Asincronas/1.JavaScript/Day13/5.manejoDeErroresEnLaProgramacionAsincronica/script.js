function sumar(a, b){
    setTimeout(function(){
        console.log(a + b);
    }, 1000);
}
sumar(1, 2);

//Manejo de errores con callback
function sumarNumerosCallback(a, b, callback){
    setTimeout(function(){
        if(typeof a != 'number' || typeof b != 'number'){
            return callback(new Error('Algun argumento no es numero'));
        }
        callback(null, a + b);
    }, 1000);
}

sumarNumerosCallback(1, 2, function(error, resultado){
    if(error){
        console.error(error);
    }else{
        console.log(resultado);
    }
});

// Manejo de errores con Promesas
function sumarNumerosPromesa(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof a != 'number' || typeof b != 'number'){
                reject(new Error('Ambos argumentos deben ser numeros'));
            }else{
                resolve(a + b);
            }
        }, 1000);
    })
}

sumarNumerosPromesa(1, 2,)
.then(function(resultado){
    console.log(resultado)
}).catch(function(error){
    console.log(error);
})

// Manejo de errores con async y await
async function sumarNumerosAsyncAwait(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('Alguno de los argumentos no es un numero');
}
return a + b
}

async function manejarErrores(){
    try{
        let resultado = await sumarNumerosAsyncAwait(2, 3);
        console.log(resultado);
    }catch(error){
        console.log(error.message);
    }
}

manejarErrores();