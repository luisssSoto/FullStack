// Modifique el Loop For Of de la función testLoop, para que ante la primer letra 'B' 
// que encuentre dentro del array, corte el ciclo con la instrucción break

let miArray = ['A', 'A', 'B', 'A', 'B', 'B', 'A'];

function testLoop() {
    for(let letra of miArray) {
        if(letra === 'B'){
            break;
        }
        console.log(letra);
    }
}

