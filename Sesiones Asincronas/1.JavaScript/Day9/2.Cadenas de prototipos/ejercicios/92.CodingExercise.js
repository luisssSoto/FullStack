// Crea un objeto denominado estudiante, con las propiedades nombre, 
// apellido y legajo. Y luego, dentro de la función prototipos(), crea 
// una instancia estudiante1 que se base en el prototipo estudiante. 
// Se pide que, en la misma función, se imprima en consola el contenido 
// de la propiedad proto de la instancia estudiante1, que como vimos, 
// va a contener la referencia a su prototipo.

let estudiante = {
    nombre: 'Luis',
    apellido: 'Soto',
    legajo: 'ehh'
}

function prototipos() {
    let estudiante1 = Object.create(estudiante);
    console.log(estudiante1.__proto__);
}

prototipos();