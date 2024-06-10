// Implementar la función agregarPropiedad, para que le agregue al objeto polo, 
// la propiedad o atributo genero y lo inicialice como 'Masculino'
let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
    fabricar() { console.log("Polo fabricado") }
};

function agregarPropiedad() {
    polo.genero ='Masculino';
}