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
        this.goles = goles;
    }
}

boxeador = new Deportista('El Dinamita Marquez', 40);
console.log(`Un ejemplo de un buen boxeador mexicano es: ${boxeador.nombre}`);


futbolista = new Futbolista('Cristiano Ronaldo', 35, 1000);
console.log(`El famoso futbolista ${futbolista.nombre} lleva mas de ${futbolista.goles} goles anotados a lo largo de su trayectoria`);