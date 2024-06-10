// Programar la función test que dispare un timeout con un tiempo de 1500, 
// y que cumplido el tiempo, llame a una función callback que también se 
// deberá programar.  Esta segunda función, se debe llamar mensaje() y 
// deberá mostrar en un alert lo siguiente: Mensaje impreso

function test(){
    setTimeout(mensaje('Mensaje impreso'),1500)
}

function mensaje(m){
    alert(m);
}