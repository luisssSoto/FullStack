function calcularBeneficios(){
    let elementoTexto1 = document.getElementById("respuesta1");
    let elementoTexto2 = document.getElementById("respuesta2");
    let elementoTexto3 = document.getElementById("respuesta3");

    let elementoInput = document.getElementById("textoEdad");
    let textoEdad = elementoInput.value;

    let r1 = textoEdad >= 18;
    elementoTexto1.textContent = r1;

    let r2 = textoEdad >= 18 && textoEdad <= 30;
    elementoTexto2.textContent = r2;

    let r3 = textoEdad == 20 || textoEdad == 25;
    elementoTexto3.textContent = r3;
}