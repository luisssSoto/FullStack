// Dado el archivo auxiliar datos.json, obtener los datos de dicho archivo utilizando 
// XMLHttpRequest y asigne cada campo a la variable correspondiente ya declarada.
let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '107.CodinExercise.json', true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        if(xhr.status === 200){
            titulo = xhr.response.titulo;
            director = xhr.response.director;
            lanzamiento = xhr.response.lanzamiento;
            duracion = xhr.response.duracion;
            actores = xhr.response.actores
            premioOscar = xhr.response.premioOscar;
        }
        else{
            
        }
        document.write('<h1> Titulo: ' + titulo + '</h1>');
    }
    xhr.send();
}
obtenerDatos();
