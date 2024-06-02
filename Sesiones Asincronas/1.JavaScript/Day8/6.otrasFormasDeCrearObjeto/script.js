//Object()
let coche1 = new Object();
coche1.marca = 'Chevrolet';
coche1['modelo'] = 'Prima';
coche1.encender = function(){
    alert('Coche encendido');
}

let perro1 = new Object({nombre: 'Simba'});
console.log(perro1.nombre);


//create
let coche2 = Object.create(coche1);
console.log(coche2.marca);