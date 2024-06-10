// Crea un constructor para el objeto Automovil 
// e inicializa las propiedades/atributos con los siguientes valores:
// marca: Ford
// modelo: Fiesta
// anio: 2015
// arrancar(): Debe mostrar en consola el mensaje "En marcha"

function Automovil(){
    this.marca = 'Ford',
    this.modelo = 'Fiesta',
    this.anio = 2015,

    this.arrancar = function(){
        console.log("En marcha");
    }
}