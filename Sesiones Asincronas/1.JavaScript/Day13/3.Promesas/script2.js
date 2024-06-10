// Promesas 2da parte
let promesa1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 2000, 'Hola')
});

let promesa2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 4000, 'Mundo')
});

Promise.all([promesa1, promesa2]).then(function(valores){
    console.log(valores)
});

console.log('El codigo sigue corriendo');