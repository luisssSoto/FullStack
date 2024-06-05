/*El constructor es el responsable de darle instrucciones a la clase de que 
manera se van a crear las futuras instancias de la clase*/

class SuperHeroe{
    constructor(name, nickname, superpoder){
        this.name = name;
        this.nickname = nickname;
        this.superpoder = superpoder;
    }
}

spiderman = new SuperHeroe('Peter Parker', 'Spiderman', 'Poderes de araña');
console.log('Hola amigos yo soy: ' + spiderman.nickname);