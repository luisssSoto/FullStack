function comprarLeche(){
    let elementoInput = document.getElementById("precioLeche");
    let precioLeche = elementoInput.value;
    let elementoTitulo2 = document.getElementById("decision")

    if (precioLeche < 5){
        elementoTitulo2.textContent = "Compra 2 cartones 🥛"
    }
}