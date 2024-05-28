function comprarLeche(){
    let elementoInput = document.getElementById("precioLeche");
    let precioLeche = elementoInput.value;
    let elementoTitulo2 = document.getElementById("decision");

    if (precioLeche < 5){
        elementoTitulo2.textContent = "Compra 2 cartones 🥛🥛";
    }
    else{
        if (precioLeche < 8){
            elementoTitulo2.textContent = "Compra solo 1 carton 🥛";
        }
        else{ elementoTitulo2.textContent = "Huye de ahi!!! 🏃🏻‍♂️"};
    }
}