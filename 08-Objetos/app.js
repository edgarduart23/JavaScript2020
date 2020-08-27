let miLibro = {
    titulo: 'El libro de javaScript',
    autor: 'Grover Pablo Vazquez',
    paginas: 400,
    publicado: false
}

console.log(miLibro.publicacion);
console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
miLibro.paginas = 500;
console.log(miLibro.paginas);

// Ejercicio, crear un objeto persona que tenga las siguientes prop:
//nombre, edad, ciudad
//cambiar la edad
//mostrar datos de la persona

let persona = {
    nombre: 'Pablo',
    edad: 30,
    ciudad: 'Lima'
}
persona.edad = 35;
console.log(`${persona.nombre} tiene ${persona.edad} edad, y vive en la ciudad de ${persona.ciudad}`);

// Usando objetos con funciones
let miLibroA = {
    titulo: 'El libro de javaScript',
    autor: 'Grover Pablo Vazquez',
    paginas: 400,
    publicado: false
}

console.log(miLibroA.publicacion);
console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
miLibroA.paginas = 500;
console.log(miLibroA.paginas);

let miLibroB = {
    titulo: 'Programacion en PHP',
    autor: 'Grover Pablo Vazquez',
    paginas: 700,
    publicado: true
}

let getResumen =  (libro) => {
    return {
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
        }
     }

let libroAResumen = getResumen(miLibroA);
let libroBResumen = getResumen(miLibroB);
console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);
console.log(libroAResumen.resumen);
console.log(librosAResumen.resumenPaginas);

// Referencia de objetos
let persona = {
    nombre: 'Pablo',
    edad: '30',
    sueldo: 1200
}

let cambiarSueldo =(person, monto => {
    person.sueldo = person.sueldo + monto;
    console.log(person);
})

cambiarSueldo(persona, 500);
console.log(persona);

// Métodos
let persona = {
    nombre: 'Pablo',
    edad: 30,
    sueldo: 1200,
    metodoPrueba: function (){
        //console.log('Escribiendo desde el método Prueba');
        return 'Resultado desde prueba'
    },
    cambiarEdad: function(e){
        this.edad = this.edad + e;
    }
}

persona.metodoPrueba();
console.log(result);

// Uso del this
persona.cambiarEdad(3);


// Objeto String

let nombre = 'Grover Vázquez';
let clave = '12309clave567.e'
console.log(nombre.length);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());

console.log(nombre.trim());
console.log(clave.incluces('clave'))
console.log(clave.incluces('clave', 5))


// Destructuración
const getPersonaDatos = () => {
    const respuesta = [
                {
                codigo: 200,
                data: {
                    persona: {
                        nombre: 'Pablo',
                        direccion: {
                            ciudad:'lima',
                            pais: 'Perú'}
                    }
                }
            },
            {
                codigo: 300,
                data: {
                    persona: {
                        nombre: 'Ana',
                        direccion: {
                            ciudad:'lima',
                            pais: 'Perú'}
                    }
                }
            },

]
    return respuesta;
}



let {codigo: status, data: {persona: {nombre: nom}}} = getPersonaDatos()[0];

for (const {codigo : status, data : {persona: {nombre : nomm}}} of getPersonaDatos()) {
    console.log(nom);
}
console.log(status);
console.log(nom);





