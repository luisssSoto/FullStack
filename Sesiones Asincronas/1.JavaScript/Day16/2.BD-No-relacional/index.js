//configuracion para inicializar la comunicacion con MySql
//1. npm init -y
// 1.a crear el archivo index.js
//2. npm install express
//3. npm install mongodb

//Configurar con ExpressJS el servidor de la app
const express = require('express');
// const { MongoClient } = require('mongodb');
const app = express();

app.set('port', 3000);
app.listen(3000);

//LLamar al objeto MongoClient del componente mongodb
const {MongoClient} = require('mongodb');

//Funcion asincrona para hacer las peticiones al servidor
async function usar(){
    //Crear nueva instancia de MOngo Client
    const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

    //Nos conectamos y hacemos nuestras peticiones
    try{
        const conexion = await client.connect();
        const controlador = conexion.db().collection('clientes');

        let respuesta, filas, filtro;

        // Insertar un nuevo registro
        const nuevoCliente = {nombre: "Alejandro Soto", genero: 0, telefono: 151515, domicilio: 'Av. Siempre Viva 4269'};
        respuesta = await controlador.insertOne(nuevoCliente);
        console.log('Insertado: ' + respuesta);

        //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log('Seleccion: ', filas);

        //Modificar el registro anterior
        const cambiarCliente = {$set: {genero: 1, telefono: 161616}};
        filtro = {nombre: 'Alejandro Soto'};
        respuesta = await controlador.updateOne(filtro, cambiarCliente);
        console.log('Actualizado: ', respuesta);

        //Realizar una consulta
         filtro = {genero: 1};
         filas = await controlador.find(filtro).toArray();
         console.log('Seleccion: ', filas);
         
         //Eliminar un registro
         filtro = {nombre: 'Alejandro Soto'};
         respuesta = await controlador.deleteOne(filtro)
         console.log('Eliminado: ', respuesta),
         
         //Realizar una consulta
          filas = await controlador.find().toArray();
          console.log('Seleccion: ', filas); 
    } catch(error){
        console.log(error)
    };
};

usar();