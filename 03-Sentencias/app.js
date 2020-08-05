// sentencia IF

var nombre = 'Pablo';
var EstadoCivil = 'soltero';
var estaCasado = false;
if (estadoCivil ){
    // si es verdadera la condición
    console.log(nombre + 'esta soltero');
} else {
    //si es falsa la condición
    console.log(nombre + 'esta soltero');
}


// Sentencias condicionales

var nombre = 'Pablo';
var edad = 20;

// edad <12 es un niño.
// edad >11, es <18, es un adoloscente.
// edad > 17, es <60, es un adulto.
// edad > 60, es un anciano.

if (edad < 12 ){
    console.log(nombre + ' es un niño.');
} else if ((edad > 11) && (edad <18)) {
    console.log(nombre + ' es un adolescente.');
} else if ((edad > 17) && (edad <60)) {
    console.log(nombre + ' es un adulto.');
} else {
    console.log(nombre + ' es un anciano.');
}

// operadores ternarios

var nombre = 'Pablo';
var edad = 16;

edad >=18 ? console.log(nombre + 'es mayor de edad') : console.log(nombre + 'no es mayor de edad');

// Sentencia Switch
var mes = 8;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Enero');
        break;
    case 3:
        console.log('Enero');
        break;
    case 4:
        console.log('Enero');
        break;
    default:
        console.log('Mes no considerado');    
}

// Sentencia For
for (var i = 1;i <= 10;i++){
    console.log(i);
}

//Sentencia while
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// Sentencia do .. while: se ejecuta al menos una vez

var i = 1;
do{
    console.log(i);
    i++;

}while(i <= 10);


// Valores verdaderos y falsos
// valores falsos: undefined, null, 0, ''
//valores verdaderos: NOT valores falses


// si se define igual a 0,'' es indefinida
var edad;
    edad =  10;

if (edad) {
    console.log('Variable esta definida');
} else {
    console.log('variable no definida');
}
var edad2;
    edad2 =  10;
//operadores de igualdad con == se puede preguntar por distintos tipos datos, con === si interesa el tipo de datos
if (edad2 == 10) {
    console.log('Variable con coersion');
} else {
    console.log('variable sin coersion');
}

