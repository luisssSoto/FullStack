/*Cambia el método de autenticación de tu usuario en MySQL a 
mysql_native_password. Para hacer esto, tendrás que ejecutar algunas 
consultas SQL en tu base de datos:*/

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Madeinmexico1994!';FLUSH PRIVILEGES;
