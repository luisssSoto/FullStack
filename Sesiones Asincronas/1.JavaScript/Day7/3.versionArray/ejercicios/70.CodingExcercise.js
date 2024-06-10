// En la función ya declarada, obtenga la menor nota del array e imprima en consola 
// la misma.
let notas = [6, 9, 7, 5, 1, 5, 4];
function menorNota() {
    let menor = notas[0]
    for(let numero of notas){
        if(numero < menor){
            menor = numero
        }
    }
    console.log(menor);
}

menorNota();