class Colegio {
    constructor(nombre, direccion, cantAlumnos) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }
    get nombre() {
        return this._nombre;
    }
    
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    
    get direccion() {
        return this._direccion;
    }
    
    set direccion(nuevaDireccion) {
        this._direccion = nuevaDireccion;
    }
    
    get cantAlumnos() {
        return this._cantAlumnos;
    }
    
    set cantAlumnos(nuevaCantAlumnos) {
        this._cantAlumnos = nuevaCantAlumnos;
    }
}
let colegio1 = new Colegio('San Martin', 'Av. Patria', 450);
console.log(colegio1.nombre);
colegio1.nombre = 'San Francisco';
console.log(colegio1.nombre);