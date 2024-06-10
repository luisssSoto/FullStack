// Dado el constructor Cancion y la instancia cancion1 ya declarados, 
// se pide agregar una función al objeto prototipo Cancion, de forma 
// que se herede de forma dinámica a la instancia cancion1 a través de 
// prototype. La función se debe llamar stop(), y debe imprimir en 
// consola: "[nombre de la cancion] en pausa"

function Cancion(nombre, autor, album) {
    this.nombre = nombre;
    this.autor = autor;
    this.album = album;
}

Cancion.prototype.stop = function(){
    console.log(`${this.nombre} en pausa`)
}

let cancion1 = new Cancion('Take on Me', 'a-ha', 'Hunting High and Low');