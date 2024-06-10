//1. Declaracion de clase:
class Papel{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    };
};

//2. Expresion de clase
//2a anonima
let PapelA = class{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    };
};

//2b nombrada
let PapelNombradito = class MiPapelN{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// antes de crear una instancia de clase, esta ultima necesita haber sido creada primero
let papelNombrado = new PapelNombradito(5, 3);
console.log(papelNombrado.alto);
console.log(papelNombrado.ancho);