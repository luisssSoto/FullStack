let perro = {
    nombre: 'Simba',
    raza: 'Shit Tzu',
    edad: 4,
    ladrar(){
        console.log('Guau');
    },
    saludar(){
        console.log('Hola me llamo '+ this.nombre);
    }
};
let perro2 = {
    nombre: 'Reina',
    raza: 'Caniche',
    edad: 15,
    ladrar(){
        console.log('Guau');
    },
    saludar(){
        console.log('Hola me llamo '+ this.nombre);
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

//This
perro.saludar();
perro2.saludar();