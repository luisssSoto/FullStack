"use strict";

function seleccionarElemento(elemento){
    let elementoTexto = document.getElementById(elemento);
    let valorTexto = elementoTexto.value;
    let valorNumero = Number(valorTexto);

    return valorNumero;;
}

function calcular(){
    let valor1, valor2, valor3, valor4, valor5, valor6;
    valor1 = seleccionarElemento("ventasTienda1");
    valor2 = seleccionarElemento("ventasTienda2");
    valor3 = seleccionarElemento("ventasTienda3");
    valor4 = seleccionarElemento("ventasTienda4");
    valor5 = seleccionarElemento("ventasTienda5");
    valor6 = seleccionarElemento("ventasTienda6");
    let suma = valor1 + valor2 + valor3 + valor4 + valor5 +valor6;
    let msg = "El total de todas las tiendas es: " + suma;

    let elementoTexto = document.getElementById("salidaParrafo")
    elementoTexto.textContent = msg;
}