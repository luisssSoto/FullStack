// Dado el objeto automóvil ya creado, implementar la función modificarAnio, 
// que modifique el año del objeto por el año 2018.

let automovil = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015, 
    arrancar() { console.log("En marcha") }
};

function modificarAnio() {
    automovil.anio = 2018;
}