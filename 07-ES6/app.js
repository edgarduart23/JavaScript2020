//ES5 - Variables
var nombre5 = 'Pablo';
console.log(nombre5);
var edad5 = 35;
nombre5 = 'Carlos';
console.log(nombre5);


//ES6 - Variables
const nombre6 = 'Pedro';
let edad6 = 28;
console.log(edad6);
//nombre6 = 'Ana';
edad6 = 30;
console.log(edad6);


// Bloques y alcance de las variables
let test;
test = 10;
 function prueba(){
     let test;
     test = 15;
 }

 prueba();
 console.log(test);

 {
     const a = 3;
     let b = 4;
     var c = 5;
 }

 // lo que esta en un bloque queda dentro de ese bloque
 console.log(a + b);
 console.log(c);

 // Template Strings
 let nombre = 'Pablo';
 let apellido = 'Vásquez';
 const nacimiento = 1985;
 const ciudad = 'Lima';
 function calcularEdad(year){
     return 2019 - year;
 }

 //ES5
 console.log(NOMBRE + '' + APELLIDO + ', NACIÓ EN ' + CIUDAD +', Y SU EDAD ES ' + calcularEdad(nacimiento));
 //ES6
 console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(nacimiento)} `);

 // Funciones de cadenas ES6
 let nombreCompleto = `${nombre} ${apellido}`;
 console.log(nombreCompleto);
 console.log(`${nombre} `.repeat(5));
 console.log(nombreCompleto.includes('blo'));
 console.log(nombreCompleto.startsWith('Pa'));
 console.log(nombreCompleto.endsWith('ez'));


// Funciones Flecha

const years = [2000, 2005, 2008, 2012];

//ES5
var edad5 = years.map(function (el){
    return 2019 - el;
});
console.log(edad5);

//ES6
let edad6 = years.map(el => 2019 - el);
console.log(edad6);

edad6 = years.map((el, index)=>`Edad ${index + 1}: ${2019 - el}` );
console.log(edad6);

edad6 = years.map(
    (el,index) => {
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad ${index + 1}: ${edad}`;
    }
);
console.log(edad6);

//ES5
const cuadrado = function (num){
    return num * num;
}
console.log(cuadrado(5));

const cuadrado = (num) => {
    return num * num;
}


const cuadrado = (num) => num * num;
console.log(cuadrado(3));

const personas = [
    {
        nombre: 'Pablo',
        edad: 20
    },
    {
        nombre: 'Ana',
        edad: 27
    },
    { nombre: 'Carlos',
        edad: 12
    }
];
const menores30 = personas.filter(function (persona){
    return persona.edad < 30;
})
console.log(menores30);

const menores30 = personas.filter( (persona) => persona.edad < 35);
console.log(menores30);

//Destructuración- Destrucción - Destructuring

//ES5
var datos = ['Pablo', 25];
var nombre = datos[0];
var edad = datos[1];

//ES6
var [nombre,edad] = ['Pablo', 25];
console.log(nombre);
console.log(edad);

const persona = {
    nombre: 'Carlos',
    edad: 30
}

const {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

const {nombre: n, edad: e} = persona;
console.log(n);
console.log(e);


// Ejemplo practico
const calcMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria =  edad >= 18 ? true : false;

    return [edad,mayoria];
}

const [edad2, mayoria] = calcMayoriaEdad(1990);
console.log(edad2);
console.log(`es mayor ed edad: ${mayoria}`);

//Mapas es similar a los arreglos pero los indices pueden ser distinto a numericos, clave-valor
const datos = new Map();

// Asignación
datos.set('nombre', 'Grover');
datos.set('edad', 30);
datos.set(1,'grover@gmail.com');
datos.set(2, 'grover@gmail.com');
datos.set('movil', 999999);

// devolver
console.log(datos.get('nombre'));
console.log(datos.get(2));
console.log(datos.size);

//para eliminaR un dato
datos.delete(2);

//para eliminar todo el mapa
datos.clear();

datos.forEach((value,key) => {
    console.log(key + ':' + value)
})

// Spread Operator : operador de propagacion

var suma = function(a, b, c, d){
    return a + b + c + d;


}

var ope1 = suma(10,20,30,40);
console.log(ope1);

//ES6
var valores = [10 , 20 , 30, 40];
const ope2 = suma (...valores);
console.log(ope2);


const rrhh = ['Pedro', 'Pablo', 'Ana'];
const contabilidad = ['Felipe', 'Carlos', 'Maria'];

const empresa = [...rrhh, ...contabilidad];
console.log(empresa);
