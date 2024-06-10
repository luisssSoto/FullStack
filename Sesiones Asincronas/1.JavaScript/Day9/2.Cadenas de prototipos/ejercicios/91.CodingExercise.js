// Crea un objeto denominado auto, con las propiedades marca y modelo, y 
// asígnale a estas propiedades algún valor. Luego, dentro de la función 
// prototipos(), crea una instancia auto1 que se base en el prototipo auto. 
// Se pide que, en la misma función, se imprima en consola el contenido de la 
// propiedad proto de la instancia auto1, que como vimos, va a contener la referencia 
// a su prototipo.
let auto = {
    marca: 'Volwsvawen',
    modelo: 'Chevy'
}

function prototipos() {
    let auto1 = Object.create(auto);
    console.log(auto1.__proto__)  
}

prototipos();
