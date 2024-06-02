//Constructor
function Perro(raza, edad, color){
    this.patas = 4;
    this.raza = raza;
    this.edad = edad;
    this.color = color;
    this.ladrar = function(){
        console.log('Guau!');
    }
};

let simba = new Perro('Shih Tzu', 4, 'marron');
let reina = new Perro('Caniche', 15, 'blanco');
let batu = new Perro('Electrico', 8, 'negro');

for (let caracteristica in simba) {
        console.log(caracteristica + ':' + simba[caracteristica])
    };