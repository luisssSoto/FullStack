// Crea un constructor Pelicula, con las propiedades titulo, director y duracion. 
// Y luego, dentro de la función prototipos(), crea una instancia pelicula1 mediante 
// el constructor antes definido con los siguientes datos: "Jurassic Park", 
// "Steven Spielberg", 127. Se pide que, en la misma función, se imprima en consola 
// el resultado de ejecutar el método valueOf() de la instancia pelicula1 .
function prototipos(){
    let pelicula1 = new Pelicula('Jurassic Park', 'Steven Spielberg', 127);
    console.log(pelicula1.valueOf());
}

function Pelicula(titulo, director, duracion){
    this.titulo = titulo;
    this.director = director;
    this.duracion = duracion;
}