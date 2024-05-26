// Declare dos variables FUERA de la funcion test(). 
// Las mismas se deben llamar pelicula y hora, y se le deben asignar 
// los valores "Pulp Fiction" y "21:00" respectivamente.

// Dentro de la funcion test() se debe mostrar en un alert el 
// siguiente mensaje utilizando las variables:
//  "La funcion de Pulp Fiction es a las 21:00".
let pelicula =  "Pulp Fiction";
let hora = "21:00"

function test(){
    let msg = `La funcion de ${pelicula} es a las ${hora}`
    alert(msg)
}