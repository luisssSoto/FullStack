//configuracion para inicializar la comunicacion con MySql
//1. npm init -y
// 1.a crear el archivo index.js
//2. npm install express
//3. npm install mysql

//Configurar con ExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

//Llamar al componente de mysql
var mysql = require('mysql');

//Establecer los parametros de la conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Madeinmexico1994!',
    database: 'mibasenueva'
})

//Nos conectamos con la base
connection.connect();

//Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1, "Federico", 1, 151515, "Av. Siempre Viva")', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
})

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
})

//Realizar modificacion de registro
connection.query('UPDATE cliente SET genero = 0, telefono = 161616 WHERE idCliente = 1', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
    
})

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
})

//Eliminar un registro
connection.query('DELETE from cliente WHERE idCliente = 1', function(error, filas){
    if(error) throw error;
    console.log(filas);
})

//Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
})
//Cerramos la conexion
connection.end();