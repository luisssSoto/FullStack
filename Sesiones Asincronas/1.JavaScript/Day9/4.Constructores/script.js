function Libro(autor, titulo, paginas) {
    this.autor = autor;
    this.titulo = titulo;
    this.paginas = paginas
};

let libro1 = new Libro("Stephen King", "Carrie", 524);

console.log(`Metodo del Prototipo Object: ${libro1.valueOf()}`);

//Todos los tipos de datos responden tambien al concepto de Cadena de prototipos

//Crear un nuevo metodo para Libro
Libro.abrirLibro = function () {
    console.log(this.titulo, 'ha sido abierto');
}
libro3 = new Libro("otroAutor", "otrolibro", 1000);
try {
    console.log(libro3.abrirLibro())
} catch (error) {
    console.log('No fue posible abrir el libro por este error', error)
};

// Para cambiar la propiedad o metodo de un Prototipo se hace siguiedo la siguiente sintaxis
Libro.prototype.abrirLibro = function () {
    console.log(this.titulo, 'ha sido abierto')
}

libro3.abrirLibro();
libro1.abrirLibro();

//Ahora bien es solo recomendable asignar nuevos metodos de esta manera pero no asi propiedades
Libro.prototype.edicion = this.edicion;

console.log(libro3.edicion);
libro3.edicion = "2005";
console.log(libro3.edicion);
console.log(libro1.edicion);

// este enfoque se recomienda mejor para constantes
Libro.prototype.tieneHojas = true;
console.log(libro3.tieneHojas);


// como regla general las propiedades iran dentro del constructor y los metodos con el enfoque visto previamente
//ESTO ES UNA BUENA PRACTICA

//Definir propiedades dentro del constructor
function Gato(name){
    this.name = name;
}

//Definir metodos fuera del constructor
Gato.prototype.maullar = function(){
    console.log(`${this.name} dice ¡Miauuuuu!`);
}

gato1 = new Gato('chasky');
gato1.maullar();
console.log(gato1);