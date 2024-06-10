// En el archivo script.js, programe la función generarContenido() que agregue 
// elementos HTML mediante código JavaScript. Se debe agregar, en el div con ID 
// contenido, una etiqueta <label> con el texto "Label 1" y una etiqueta <input> 
// con el ID txtInput. El label debe contar con el atributo for que lo vincule con 
// txtInput y al input agregarle el atributo type igual a number y un atributo valor 
// igual a 0.

function generarContenido() {
    let labelElement = document.createElement('label');
    labelElement.textContent = 'Label 1';
    labelElement.setAttribute('for', 'txtInput');

    let inputElemnt = document.createElement('input');
    inputElemnt.setAttribute('ID', 'txtInput');
    inputElemnt.setAttribute('type', 'number')
    inputElemnt.setAttribute('value', '0');

    let divElement = document.getElementById('contenido');
    divElement.appendChild(labelElement);
    divElement.appendChild(inputElemnt);
}