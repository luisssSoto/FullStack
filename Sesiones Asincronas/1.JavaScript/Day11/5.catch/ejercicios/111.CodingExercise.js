// Dado el código ya desarrollado en el ejercicio Fetch 1, agregar el elemento 
// catch para capturar posibles errores e imprimir en consola el error.
let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        titulo = salida.titulo;
        director = salida.director;
        lanzamiento = salida.lanzamiento;
        duracion = salida.duracion;
        actores = salida.actores;
        premioOscar = salida.premioOscar;
    }).catch(function(error){
        console.log(error);
    })
}