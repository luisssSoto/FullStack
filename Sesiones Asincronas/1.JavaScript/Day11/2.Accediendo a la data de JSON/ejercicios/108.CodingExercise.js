// Dado el archivo auxiliar datos.json, obtener los datos de dicho archivo utilizando 
// fetch y asigne cada campo a la variable correspondiente ya declarada.
let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;

function obtenerDatos() {
    fetch('108.CodingExercise.json')
    .then(respuesta => respuesta.json())
    .then((salida) => {
        nombre = salida.nombre;
        calle = salida.calle;
        ciudad = salida.ciudad;
        cantEstudiantes = salida.cantEstudiantes;
        estudiantes = salida.estudiantes;
    })
}