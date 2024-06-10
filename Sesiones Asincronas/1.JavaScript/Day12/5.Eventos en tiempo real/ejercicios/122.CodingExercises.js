//Declarar una variable socket, que establezca una comunicación con el servidor 
//ws://localhost:4200 y que capture el evento onmessage para recibir mensajes del servidor. 
//Al dispararse el evento, se pide imprimir en consola el contenido del mensaje mediante 
//event.data
let socket = new WebSocket('ws://localhost:4200');
socket.onmessage = function(event){
    console.log(event.data);
};