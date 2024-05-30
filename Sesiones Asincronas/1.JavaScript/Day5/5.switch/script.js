function consultarPrecio(){
    let elementoMostrarPrecio = document.getElementById("mostrarPrecio");
    let elementoInputFruta = document.getElementById("precioTexto");
    let numeroFruta = Number(elementoInputFruta.value);

    switch(numeroFruta){
        case 1:
            elementoMostrarPrecio.textContent = "$ " + 4.5;
            break;
        case 2:
            elementoMostrarPrecio.textContent = "$ " + 5.2;
            break;
        case 3:
            elementoMostrarPrecio.textContent = "$ " + 2.6;
            break;
    }
}