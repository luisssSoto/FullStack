// Dada la clase Persona ya definida, crear la subclase Empleado 
// (que hereda de Persona) pero que agrega la propiedad: legajo.
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, legajo){
        super(nombre, apellido);
            this.legajo = legajo;
        }
    }