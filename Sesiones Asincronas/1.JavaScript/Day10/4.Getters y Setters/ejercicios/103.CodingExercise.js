// Dada la clase Ciudad, agregue los métodos get y set para las propiedades 
// nombre, pais y cantHabitantes.

class Ciudad {
    constructor(nombre, pais, cantHabitantes) {
        this._nombre = nombre;
        this._pais = pais;
        this._cantHabitantes = cantHabitantes;
    }
    get getNombre(){
        return this.__nombre;
    }
    set getNombre(value){
        this.__nombre = value;
    }

    get getPais(){
        return this.__pais
    }
    set setPais(value){
        this.__pais = value;
    }

    get getCantHabitantes(){
        return this.__cantHabitantes;
    }
    set setCantHabitantes(value){
        this.__cantHabitantes = value;
    }
}
