// Implementar la función repetirContenido, para que dado el parámetro veces genere esa 
// misma cantidad de elemento llamando a la función generarContenido ya declarada. 
// Es decir que si el parámetro veces es igual a 5, se deberán generar (mediante la 
// función generarContenido) 5 elementos input con sus respectivos label.

function repetirContenido(veces) {
    for(let x = 0; x <= veces; x ++){
        generarContenido(x)
    }
}

function generarContenido(numero) {
    let content = document.getElementById("contenido");
    
    let label = document.createElement("label");
    label.setAttribute("for", "txtInput" + numero);
    label.innerText = "Label " + numero;
    
    let input = document.createElement("input");
    input.setAttribute("id", "txtInput" + numero);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    
    content.appendChild(label);
    content.appendChild(input);
    
    return content;
}