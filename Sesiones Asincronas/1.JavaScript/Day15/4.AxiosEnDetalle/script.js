const { default: axios } = require("axios");

let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}

axios.post('https:/jsonplaceholder.typicode.com/posts', datos)
    .then(respuesta => console.log('Post fue creado con exito', respuesta.data))
    .catch(error => console.error('Error al publicar:', error));

//manejar multiples llamadas
let miToken = 'esteEsMiToken';

//interceptores en axios
//-------------
axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer $(miToken)`;
        return config
    }, (error) => {
        return Promise.reject(error);
    }
)
// ---------------------

//interceptores de respuesta 
//----------------
axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return Promise.reject(error);
    }
);

let pedido1 = axios.get('https//api.ejemplo.com/data1');
let pedido2 = axios.get('https//api.ejemplo.com/data2');
let pedido3 = axios.get('https//api.ejemplo.com/data3');

Promise.all([pedido1, pedido2, pedido3])
    .then(([respuesa1, respuesta2, respuesta3]){
        //Codigo
        console.log(respuesa1, respuesta2, respuesta3);
    })
    .catch(error => {
        //manejar errores{
        console.error(error);
    })