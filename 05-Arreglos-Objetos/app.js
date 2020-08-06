// Arreglos

var nombre = ['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetales = new Array('Tomate','Lechuga', 'Zanahoria');

console.log(nombre[2]);
console.log(vegetales[1]);

nombre[1] = 'jose'

console.log(nombre.length)

//Operaciones con arreglos

var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas);

for (var i=0; i<=frutas.length -1;i++){
    console.log(frutas[i]);
}

frutas.forEach(function (elemento, indice, array)){
    console.log(elemento, indice);
}

// para añadir un elemento al final
frutas.push('naranja');
console.log(frutas);
// para añadir al principio
frutas.unshift('fresa');
console.log(frutas);
// elimina el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);
// elimina el primer elemento del arreglo
frutas.shift();
console.log(frutas);

// para mostrar la posicion del elemento
var pos = frutas.indexOf('uva');
console.log(pos);

// eliminar elementos que esten en el medio
frutas.splice(1,1);
console.log(frutas);
frutas.splice(1,2);
console.log(frutas);
 
// arreglo con elementos de diferentes tipos

var persona = ['Pablo', 'Vazquez', 32, '9999', 1.75];
console.log(persona);

// Objetos literales

var personas = {
    nombre: 'Pablo',
    apellido: 'Vázquez',
    gustos: ['futboll', 'peliculas', 'inglés'],
    trabajo: 'Instructor',
    esCasado: true
};

// formas de mostrar
console.log(persona.apellido);
console.log(persona['apellido']);

persona.esCasado = false;
console.log(persona.esCasado);


// Objetos con la sintaxis Object

var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido= 'Pinedo';
persona2['trabajo'] = 'webdeveloper';

console.log(persona2);

// Objetos y Métodos

var persona = {
    //propiedades
    nombre: 'Pablo',
    apellido: 'Vázquez',
    gustos: ['futboll', 'peliculas', 'inglés'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento = 1985,

    //Métodos
    calcularEdad: function(yearNacimiento){
        return 2020 -  yearNacimiento;
    },

    calcularEdad2: function(){
        return 2020 -  this.yearNacimiento;
    }

    
};

persona.calcularEdad2();
console.log(persona2);
console.log(persona);
var edad = persona.calcularEdad(1985);
console.log(Edad)
