let boton = document.getElementById("miButon");
let div = document.getElementById('miDiv');
let enlace = document.getElementById('miEnlace');

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

function evitarEnlace(event){
    event.preventDefault();
    alert('Enlace no habilitado');
}

//boton.addEventListener('click', mostrarMensaje);

div.addEventListener('click', mostrarMensaje);

enlace.addEventListener('click', evitarEnlace);