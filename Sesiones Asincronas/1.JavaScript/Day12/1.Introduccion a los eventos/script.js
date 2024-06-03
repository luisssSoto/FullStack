let boton = document.getElementById("miBoton");
boton.addEventListener('click', function(){
    alert('El boton fue presionado');
});

//function por fuera
let elementoBoton = document.createElement("button");
elementoBoton.innerText = 'Otro boton';
let elementoBody = document.getElementById("aqui");
elementoBody.appendChild(elementoBoton);

function mostrarMensaje(){
    alert('El otro boton fue presionado');
}

elementoBoton.addEventListener('click', mostrarMensaje);

function otroMensaje(){
   console.log('Flotar');
}

elementoBoton.addEventListener('mouseover', otroMensaje);