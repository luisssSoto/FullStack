//Constructor
function Perro(raza, edad){
    this.patas = 4;
    this.raza = raza;
    this.edad = edad;
    this.ladrar = function(){
        console.log('Guau!');
    }
};

let simba = new Perro('Shih Tzu', 4);
let reina = new Perro('Caniche', 15);
let batu = new Perro('Electrico', 8);

//Otro constructor
function Empleado(nombre, apellido, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido,
    this.edad = edad;
    this.cargo = cargo;

    this.presentarse = function(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}, soy ${this.cargo}, y tengo ${this.edad} años de edad`);
    }
};

let empleado = new Empleado('Javier', 'Perez', 35, 'Gerente de marketing');
empleado.presentarse();