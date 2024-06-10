//Programacion asincrona

//accion 1
console.log('Aqui comienza la programacion asincrona')

//accion2
setTimeout(function(){
    for(let x = 0; x < 10; x ++){
        console.log(x);
    };
}, 0);

console.log('Aqui termina la programacion asincrona');