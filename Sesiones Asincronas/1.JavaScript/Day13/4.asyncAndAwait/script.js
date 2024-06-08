//async and await
function obtenerDatos(){
    return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos);
    })
    .catch(function(error){
        console.error(error);
    });
}

obtenerDatos();
console.log('El codigo sigue');

//using async and await
async function obtenerDatos1(){
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    let datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos1();
console.log('El codigo sigue');

//3er ejemplo
async function obtenerTodo(){
    console.log('Inicio');
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosGasolian = await respuestaGasolina.json();

    console.log('Desarrollo');
    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosDolar = await respuestaDolar.json();

    console.log('Desenlace');
    console.log(datosGasolian, datosDolar);
}

obtenerTodo();