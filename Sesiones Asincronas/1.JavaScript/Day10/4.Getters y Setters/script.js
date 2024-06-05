class Deportista{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Sub clase de la clase Deportista
class Futbolista extends Deportista{
    constructor(nombre, edad, goles){
        super(nombre, edad);
        this._goles = goles;
    }
    get obtenerGoles(){
        return this._goles;
    }
    set obtenerGoles(golesRecientes){
        this.__goles = golesRecientes;
    }
}

boxeador = new Deportista('El Dinamita Marquez', 40);
console.log(`Un ejemplo de un buen boxeador mexicano es: ${boxeador.nombre}`);


futbolista1 = new Futbolista('Cristiano Ronaldo', 35, 1000);
console.log(`El famoso futbolista ${futbolista1.nombre} lleva mas de ${futbolista1.goles} goles anotados a lo largo de su trayectoria`);

console.log(futbolista1.obtenerGoles);
futbolista1.obtenerGoles = 1008;
console.log(futbolista1.obtenerGoles);