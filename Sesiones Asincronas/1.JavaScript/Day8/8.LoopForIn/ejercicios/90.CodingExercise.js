// Implementar la función mostrarInfo(), que utilizando un Loop For In, debe 
// imprimir en consola las propiedades/atributos del objeto polo con el siguiente 
// formato:
// marca: Lacoste
// color: Azul
// talle: L

let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
};

function mostrarInfo() {
    for(let propiedad in polo){
        console.log(propiedad + ': ' + polo[propiedad]);
    }
}