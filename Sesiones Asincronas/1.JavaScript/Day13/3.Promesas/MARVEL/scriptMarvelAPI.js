//For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: 
//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

// let CryptoJS = require('crypto-js');
import CryptoJS from 'crypto-js';

function getMarvelCharacters(){
    return new Promise(function(resolve, reject){
        let publicKey = '';
        let privateKey = '';
        let timestamp = Date.now();
        let hash = CryptoJS.MD5(timestamp + privateKey + publicKey);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `/http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.statusText));
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}
getMarvelCharacters().then(function(characters){
    console.log(characters);
}).catch(function(error){
    console.error(error);
})

// const publicKey = 'TU_CLAVE_PUBLICA';
// const privateKey = 'TU_CLAVE_PRIVADA';
// const timestamp = Date.now();
// const hash = md5(timestamp + privateKey + publicKey); // Usando una función MD5 para generar el hash

// const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

// // Hacer la solicitud usando fetch
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
