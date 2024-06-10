// En el archivo script.js, programe la función generarContenido() que agregue 
// elementos HTML mediante código JavaScript. Se debe agregar, en el div con ID 
// contenido, una etiqueta <p> con el texto "Parrafo 1" y además agregar una etiqueta 
// <input> con el ID txtInput y el atributo type igual a text

function generarContenido() {
    let etiquetaP = document.createElement('p');
    etiquetaP.textContent = 'Parrafo 1';

    let etiquetaInput = document.createElement('input');
    etiquetaInput.setAttribute('ID', 'txtInput');
    etiquetaInput.setAttribute('type', 'text');

    let etiquetaDiv = document.getElementById('contenido');
    etiquetaDiv.appendChild(etiquetaP);
    etiquetaDiv.appendChild(etiquetaInput);
}