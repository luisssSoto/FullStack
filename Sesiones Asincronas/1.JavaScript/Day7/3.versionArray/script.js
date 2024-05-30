"use strict";

function seleccionarElemento(elemento){
    let elementoTexto = document.getElementById(elemento);
    let valorTexto = elementoTexto.value;
    let valorNumero = Number(valorTexto);

    return valorNumero;;
}

function calcular(){
    let ventas = [];
    ventas[0] = seleccionarElemento("ventasTienda1");
    ventas[1] = seleccionarElemento("ventasTienda2");
    ventas[2] = seleccionarElemento("ventasTienda3");
    ventas[3] = seleccionarElemento("ventasTienda4");
    ventas[4] = seleccionarElemento("ventasTienda5");
    ventas[5] = seleccionarElemento("ventasTienda6");

    let suma = sumar(ventas);
    let tiendaMasVentas = mayorVentas(ventas);
    let tiendaMenorVentas = menorVentas(ventas);


    let msg = "El total de todas las tiendas es: " + suma + 
    "/Tienda con: " + tiendaMasVentas + " ventas " + 
    "/Tienda con: " + tiendaMenorVentas + "ventas ";

    let elementoTexto = document.getElementById("salidaParrafo")
    elementoTexto.textContent = msg;
}

function sumar(array){
    let total = 0;
    for(let elemento of array){
        total += elemento;
    }
    return total;
}

function mayorVentas(array){
    let mayor = array[0];
    for(let element of array){
        if(element > mayor){
            mayor = element;
        }
    }
    return mayor;
}

function menorVentas(array){
    let menor = array[0];
    for(let element of array){
        if(element < menor){
            menor = element
        }
    }
    return menor;
}
