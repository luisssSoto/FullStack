let perro = {
    nombre: 'Simba',
    raza: 'Shit Tzu',
    edad: 4,
    ladrar(){
        console.log('Guau');
    }
};

console.log(perro.nombre);
console.log(perro.edad);
perro.ladrar();

//esta manera tambien es correcta
console.log(perro['raza']);