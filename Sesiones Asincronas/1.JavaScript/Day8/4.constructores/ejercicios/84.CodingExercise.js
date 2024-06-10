// Crea un constructor para el objeto Polo e inicializa las propiedades/atributos 
//con los siguientes valores:
// marca: Lacoste
// color: Azul
// talle: L
// fabricar(): Debe mostrar en consola el mensaje "Polo fabricado"

function Polo(){
    this.marca = 'Lacoste',
    this.color = 'Azul',
    this.talle = 'L',
    this.fabricar = function(){
        console.log('Polo fabricado');
    }
}

