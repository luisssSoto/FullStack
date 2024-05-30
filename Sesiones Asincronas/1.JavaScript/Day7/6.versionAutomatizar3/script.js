"use strict";

function crearTiendas(contenedorId, min, cantidadTiendas){
    // crear elemento que almacene el parametro de contenedorId
    let elementoContenedor = document.getElementById(contenedorId)

    for(let x=1; x<=cantidadTiendas; x++){
        // crear elemento label para llamar a la funcion crearParrafoTienda
        let elementoLabel = "Tienda" + x;

        //crear elemento Tienda
        let elementTienda = crearParrafoTienda(elementoLabel, min);

        // adjuntar el elementoTienda al contenedor
        elementoContenedor.appendChild(elementTienda);
    }
}

//funcion para automatizar el proceso de construccion de un parrafo
function crearParrafoTienda(textoLabel, valorMin){

    // crear elemento parrafo
    let elementoParrafo = document.createElement("p");  

    // crear elemento label y asignarle texto 
    let elementoLabel = document.createElement("label"); 
    elementoLabel.innerText = textoLabel + ': ';

    // asociar al elemento label con el elemento input
    elementoLabel.setAttribute("for", textoLabel);

    //crear elemento input
    let elementoInput = document.createElement("input");

    // asociar con elemento label y configurar algunos otros atributos
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("min", "0");
    elementoInput.setAttribute("value", valorMin);

    // insertar los elementos label e input en el elemento padre p
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    // devolver elemento parrafo
    return elementoParrafo;
}



function seleccionarElemento(elemento){
    let valorTexto = elemento.value;
    let valorNumero = Number(valorTexto);

    return valorNumero;;
}

function calcular(){
    let ventas = [];
    let elementoTiendas = document.getElementById("contenedorTiendas");
    let posicion = 0;

    for(let item of elementoTiendas.children){
        let elementoInput = seleccionarElemento(item.children[1]);
        ventas[posicion] = elementoInput;
        posicion = posicion + 1;
    }
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
