function bienvenido() {
    return 'hola bienvenido a la sección de funciones';

}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
//entradas(argumento), código, salida(return)

function cuadradoNumero(){
    var resultado = num * num;
    return resultado;

}

var num = 3;
var valor = cuadradoNumero(num);
console.log(valor);
console.log(cuadradoNumero(5));

// Funciones con expresiones

var prueba = function (){
    return 'Mensaje de prueba'
}

console.log(prueba());

// Argumento por default
var sumar = function(a,b,c=3){
    return a + b +c;
}
console.log(sumar(10,4));

//Plantillas de cadenas (template string)
var nombre = 'Pablo'
console.log(`El nombre es ${nombre}`)
