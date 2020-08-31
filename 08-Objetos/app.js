// Manejo de clases en JavaScript

class Persona {
    constructor(nombre,edad, trabajos = []){
        this.nombre = nombre;
        this.edad = edad;
        this.trabajos = trabajos;
    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}. Trabajo`;
        this.trabajos.forEach((trabajo) => {
            biografia += `${trabajo}, `
        })
        return biografia;

    }

}

const persona1 = new Persona('Pablo', 30, ['arquitecto', 'doctor']);
const persona2 = new Persona('Pedro', 28, ['ingeniero', 'instructor']);
const persona3 = new Persona('Ana', 25, ['secretaria']);


console.log( typeof persona1)
console.log(  persona1.nombre);
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());


// Subclase: Herencia

class Persona {
    constructor(nombre,edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}. Profesiones`;
        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `
        })
        return biografia;

    }

}

class Empleado extends Persona{
    constructor (nombre,edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }
    getBiografia(){
        return super.getBiografia() + `Salario: ${this.sueldo}, puesto: ${this.puesto}`;
        
    }
}
const persona1 = new Empleado('Pablo', 30, ['arquitecto', 'doctor'], 1500, 'gerente');
const persona2 = new Empleado('Pedro', 28, ['ingeniero', 'instructor'], 1000 , 'rrhh');
const persona3 = new Empleado('Ana', 25, ['secretaria'], 100 ,'administrador');
console.log( typeof persona1)
console.log(  persona1.nombre);
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

// getter y setter 

const datos = {
    //ubicacion: 'Lima'
    get ubicacion () {
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}

datos.ubicacion = 'Buenos aires';
console.log(datos.ubicacion);
console.log(datos);