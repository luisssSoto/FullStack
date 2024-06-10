// Haciendo uso de lo visto en la clase anterior, implementar la función automatizarSuma() 
// que debe calcular y guardar el resultado de sumar el contenido de los inputs en la 
// variable sumaTotal. Para ello, hacer uso de la propiedad children vista y tener en 
// cuenta que la estructura de elementos en nuestra página HTML es la siguiente:

// <div id="contenido">
// <p>
// <label>
// <input></input>

let sumaTotal = 0;

function automatizarSuma() {
    let divElement = document.getElementById('contenido');

    for(let item of divElement.children){
        sumaTotal += Number(item.children[1].value);
         
    }
}