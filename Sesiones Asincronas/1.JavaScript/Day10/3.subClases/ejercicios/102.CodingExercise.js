// Dada la clase Medico ya definida, crear la subclase Cirujano (que hereda de Medico) 
// pero que agrega la propiedad: cantOperaciones.

class Medico {
    constructor(nombre, apellido, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }
}

class Cirujano extends Medico{
    constructor(nombre, apellido, matricula, cantOperaciones){
        super(nombre, apellido, matricula);
        this.cantOperaciones = cantOperaciones;
    }
}