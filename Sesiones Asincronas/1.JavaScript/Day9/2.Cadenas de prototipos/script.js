let perro = {
    nombre: "simba",
    edad: 5,
    raza: true
};

let perro1 = Object.create(perro);

console.log(`perro y su proto: ${perro.__proto__}`);
console.log(`perro1 y su proto: ${perro1.__proto__}`);