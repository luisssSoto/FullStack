function calcularLitros(){
    let elementoTextoKm = document.getElementById("textoKm").value;
    let elementoResultado = document.getElementById("textoResultado");
    let resultado = Number(elementoTextoKm) / 8.8;
    elementoResultado.textContent = "Vas a necesitar aproximadamente: " + resultado + " litros de combustible";
}

