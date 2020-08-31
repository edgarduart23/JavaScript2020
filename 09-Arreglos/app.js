

//Arreglos

const ingredientes = ['pescado', 'mariscos', 'cebolla'];
// push agrega al final
ceviche.push('limón');
//pop quita el ultimo elemento
console.log(ceviche.push());

//unshift agrega al principio
ceviche.unshift('papas');
//shift quita el primer elemento
console.log(ceviche.shift());

// quitar en cualquier lugar
ceviche.splice(1,1);
// tambien se puede agregar
ceviche.splice(1,0,'limon')

console.log(ceviche.lenght);
ceviche[0] ='papas';
console.log(ceviche);

// bucle sobre matrices


ceviche.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

// Recorrer un arreglo

for(let i=0; i < ceviche.lenght;i++){
    console.log(`indice ${i}: ${ceviche[i]}`);
}

//Busqueda
console.log(ceviche.indexOf('ceboolla'));

const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo:'mariscos'
    },
    {
        codigo: 3,
        titulo: 'ceboolla'
    }

]

const index = ceviche.findIndex(function(ing, index){
    //console.log(ing);
    return ing.titulo === 'mariscos'
})
console.log(ceviche)
console.log(index);


const buscarIngrediente = function (ceviche, titulo){
    const index = ceviche.findIndex(function(ing,index){
        return ing.titulo === titulo;
    });
    return index;
}

console.log(buscarIngrediente(ceviche, 'mariscos'))
console.log(ceviche[buscarIngrediente(ceviche, 'pescado')]);


// Filtrado

const paises = ['Colombia', 'Ecuador', 'Perú', 'España', 'Mexico'];
console.log(paises.filter(pais => pais.includes('o')))


const filtrarIngredientes = ceviche.filter(function(ing, index){
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
})

console.log(filtrarIngredientes);

// Ordenar un Arreglo
console.log(ceviche)
ceviche.sort(function(a,b) {
    if(a.titulo > b.titulo){
        return 1
    }
    if(a.titulo < b.titulo){
        return -1
    }
    return 0;
});
console.log(ceviche);


