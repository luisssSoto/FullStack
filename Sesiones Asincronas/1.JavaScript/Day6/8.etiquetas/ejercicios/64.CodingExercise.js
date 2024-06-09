// En la variable miArray tenemos un array donde cada uno de sus elementos es otro array. 
// Observa el código desarrollado en la función testLoop (que recorre esta variable en 
// profundidad mediante dos ciclos for), y agrega una etiqueta denominada miEtiqueta 
// con el objetivo de cortar AMBOS ciclos con la instrucción break en caso de que 
// algun array contenga un valor igual a 0.

let miArray = [[2,4,5],[3,0,6],[9,4,7]];

function testLoop() {
    miEtiqueta:
    for (let array of miArray){
        for (let numero of array) {
            console.log(numero);
            if (numero === 0) {
                break miEtiqueta;
            }
        }   
    }
}