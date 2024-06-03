let elementoAudio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    //elementoAudio.setAttribute("src", cancionElegida); --> tambien es correcta esta linea de codigo
    elementoAudio.src = cancionElegida;
    elementoAudio.play();
    let evento = new CustomEvent('cambioDeCancion');
    elementoAudio.dispatchEvent(evento);
}

elementoAudio.addEventListener('cambioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log('La cancion actual es: ' + listaCanciones.value);
}
