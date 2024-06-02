//Constructor
function Perro(){
    this.patas = 4;
    this.ladrar = function(){
        console.log('Guau!');
    }
};

let simba = new Perro();
console.log(simba.patas);
simba.ladrar();

let reina = new Perro();
reina.ladrar();
