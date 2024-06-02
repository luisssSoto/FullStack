function multiplicar(){
    //Obtener numero del usuario y castearlo
    let elementNumero = document.getElementById("numeroDeMultiplicar");
    let valorDelElemento = elementNumero.value;
    let numeroElegido = Number(valorDelElemento);

    //Obtener la tabla
    let tablaDeMultiplicacion = document.getElementById("tablaDeMultiplicar");


    //logica de la tabla de multiplicacion
    for(x=0; x<=10; x+=1){
        let valor = numeroElegido * x;

        //realizar una presentacion agradable para el usuario
        let presentacion = numeroElegido + " * " + x + " = " + valor;

        //crear un elemento de tipo <li>
        let itemLista = document.createElement("li");

        //añadir el valor obtenido al elemento li previamente creado
        itemLista.innerText = presentacion;

        //adjuntar el elemento previo a la lista desordenada <ul>
        tablaDeMultiplicacion.appendChild(itemLista);
    }
}