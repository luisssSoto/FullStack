// En el método fabricar() del objeto polo, agregar la referencia 
// this para el atributo utilizado allí.
let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
    fabricar() { console.log("Polo " + this.marca + " fabricado") }
};