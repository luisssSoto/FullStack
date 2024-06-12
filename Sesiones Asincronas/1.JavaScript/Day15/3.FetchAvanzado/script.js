//Basic Authorization
let usuario = 'Alex';
let password = 'javascriptTotal';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Authorization': 'Basic' + btoa(usuario + ':' + password),
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

//Barier Authorization
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    //cache
    cache: 'default', //no-cache, no-store, reload, force-cache, only-if-cached 
    redirect: 'follow', //error, manual
    headers: {
        'Authorization': 'Bearer' + token,
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// redirect: 'manual'
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    //cache
    cache: 'default', //no-cache, no-store, reload, force-cache, only-if-cached 
    redirect: 'manual', //error, manual, follow
    headers: {
        'Authorization': 'Bearer' + token,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if(response.type === 'opaqueredirect'){
        let nuevaUbicacion = response.headers.get('Location');
        console.log('Redirigir a: ' + nuevaUbicacion);
    }else {
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error(error));
