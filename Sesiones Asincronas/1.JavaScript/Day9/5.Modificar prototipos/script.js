function Libro(autor, titulo, paginas){
    this.autor = autor;
    this.titulo = titulo;
    this.paginas = paginas
};

let libro1 = new Libro("Stephen King", "Carrie", 524);

console.log(`Metodo del Prototipo Object: ${libro1.valueOf()}`);

//Todos los tipos de datos responden tambien al concepto de Cadena de prototipos