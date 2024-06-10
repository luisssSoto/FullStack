// Adapta la función generarContenido, para que utilizando el parámetro numero, 
// el input que se genera (y su correspondiente label asociado) utilice este 
// parámetro para definir su ID. Es decir, que si el parámetro numero es 3, 
// el ID del input generado deberá ser txtInput3 y además el label se debe 
// asociar a ese ID del input y el texto que muestra debe decir Label 3.

// El objetivo de esto, sería que luego se pueda generar código de forma repetitiva
// como se vio en la última clase y que los nombres de los campos se generen de forma
// dinámica.

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