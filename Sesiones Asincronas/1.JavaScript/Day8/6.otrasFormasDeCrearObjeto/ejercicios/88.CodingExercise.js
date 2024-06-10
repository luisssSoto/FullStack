// Dado el objeto automovil1, crear una copia del mismo objeto llamado automovil2.

let automovil1 = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015, 
    arrancar() { console.log("En marcha") }
};

let automovil2 = automovil1;
console.log(automovil2.modelo)