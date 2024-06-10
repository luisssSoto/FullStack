// Dado el constructor Videojuego y la instancia videojuego1 ya declarados, 
// se pide agregar una función al objeto prototipo Videojuego, de forma que 
// se herede de forma dinámica a la instancia videojuego1 a través de prototype. 
// La función se debe llamar play(), y debe imprimir en consola: 
// "[nombre del videojuego] ha sido iniciado"

function Videojuego(nombre, empresa, anioLanzamiento) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.anioLanzamiento = anioLanzamiento;
}

Videojuego.prototype.play = function(){
    console.log(`${this.nombre} ha sido iniciado`)
}

let videojuego1 = new Videojuego('Mario Bros', 'Nintendo', 1983);

videojuego1.play();