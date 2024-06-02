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

//actualizando objetos
perro.edad = 10;
console.log(perro.edad);

function cumplirAnos(){
    perro.edad = perro.edad + 1;
}

cumplirAnos();
console.log(perro.edad);

perro['colorOjos'] = 'marron'

console.log(perro.colorOjos);