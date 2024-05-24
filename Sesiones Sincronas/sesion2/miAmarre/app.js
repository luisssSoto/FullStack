let btn_yes = document.querySelector('#btn_yes');
let btn_no = document.querySelector('#btn_no');

function moveElementRandom(e){
    e.style.position = 'absolute';
    e.style.top = Math.random() * (window.innerHeight - e.offsetHeight)  + 'px';
    e.style.top = Math.random() * (window.innerHeight - e.offsetWidth)  + 'px';

}

btn_yes.addEventListener('click', function(e){
    alert('Sabia que dirias que SI. Casemonos y tengamos hijo TE AMMOOOO')
});

btn_no.addEventListener('mouseenter', function(e){moveElementRandom(e.target)})