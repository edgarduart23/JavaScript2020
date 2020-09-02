// Manejo de fecha y hora
const ahora = new Date();
const fecha1 = new Date("December 17, 1995");
console.log(ahora.toString());
console.log(fecha1.toString())

// obtener datos de una fecha

// obtener el año
console.log(ahora.getFullYear());
// obtener el mes
console.log(ahora.getMonth());
// obtener el dia
console.log(ahora.getDay());
console.log(ahora.getDate());

// obtener datos de la hora
console.log(ahora.getHours());
console.log(ahora.getMinutes());
console.log(ahora.getSeconds());

// timestamp o marca de tiempo
const timestamp = ahora.getTime();
console.log(timestamp.toString());
const FechaActual = new Date(timestamp);
console.log(fechaActual.getFullYear());